import Story from "../models/story.model.js";
import User from "../models/user.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";


const STORY_LIFETIME = 24 * 60 * 60 * 1000 // 24hrs - ms


export const createStory = async (req, res) => {
    try {

        const { caption } = req.body

        let image;


        if (!caption || !req.file) {
            res.status(400).json({ message: "Add a Caption or an Image" })
        }

        if (caption.length > 200) {
            res.status(400).json({ message: "Caption Cannote be Greate than 500 characters" })
        }


        if (req.file) {
            const uploadedImage = await uploadToCloudinary(req.file.buffer)
            image = uploadedImage.secure_url
        }


        const newStory = await Story.create({
            image,
            caption,
            author: req.user._id,
            expiresAt: new Date(Date.now() + STORY_LIFETIME)

        })

        console.log(newStory)

        await User.findByIdAndUpdate(req.user._id, {
            $push: { stories: newStory._id }
        })


        const populatedStoryData = await Story.findById(newStory._id).populate('author', 'name username profileImage')







        res.status(201).json({ message: "Story Created ", story: populatedStoryData })

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error })
    }
}


// Logged In user - follwings - story - visible

export const getStories = async (req, res) => {
    try {
        // allowedUsers
        let allowedUsers = [req.user._id, ...(req.user.followings) || []]

        const stories = await Story.find({
            author: { $in: allowedUsers },
            expiresAt: { $gt: new Date() }
        }).sort({ createdAt: -1 }).populate('author', "profileImage username")


        res.status(200).json({ message: "Stories fetched", stories: stories })

} catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', error: error })
    }
}

// delete story
export const deleteStory = async (req, res) => {
    try {
        const { storyId } = req.params;

        const story = await Story.findById(storyId);

        if (!story) {
            return res.status(404).json({
                message: "Story not found"
            });
        }

        // Only the story owner can delete it
        if (story.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "You can only delete your own story"
            });
        }

        await Story.findByIdAndDelete(storyId);

        // Remove story ID from user's stories array
        await User.findByIdAndUpdate(req.user._id, {
            $pull: {
                stories: storyId
            }
        });

        return res.status(200).json({
            message: "Story deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};