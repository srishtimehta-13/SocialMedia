import uploadVideoCloudinary from "../utils/uploadVideoCloudinary.js";
import Reel from "../models/reel.model.js";

export const createReel = async (req,res)=>{
    try {
        const{caption} = req.body

        let video;

        if(!caption || !req.file){
            res.status(404).json({message : "Add a caption and an video"})
        }

        if(caption.length > 500){
            res.status(404).json({message : "Caption cannot be longer that 500 characters"})
        }

        if(req.file){
            const uploadedVideo = await uploadVideoCloudinary(req.file.buffer)
            video = uploadedVideo.secure_url
        }

        const newReel = await Reel.create({
            video,
            caption,
            user : req.user._id
        })


        await User.findByIdAndUpdate(req.user._id,{
            $push : {posts : newReel._id}
        })

        const populatedReel = await Reel.findById(newpost._id).populate('author','name username profileImage')


        res.status(201).json({message:"Post created",post : populatedReel})




    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Failed to create post',
            error: error.message
        })
    }
}