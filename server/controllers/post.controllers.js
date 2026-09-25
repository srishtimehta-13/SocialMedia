import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import Post from "../models/post.model.js";

export const createPost = async (req,res)=>{
    try {
        const{caption} = req.body

        let image;

        if(!caption || !req.file){
            res.status(404).json({message : "Add a caption and an image"})
        }

        if(caption.length > 500){
            res.status(404).json({message : "Caption cannot be longer that 500 characters"})
        }

        if(req.file){
            const uploadedImage = await uploadToCloudinary(req.file.buffer)
            image = uploadedImage.secure_url
        }

        const newpost = await Post.create({
            image,
            caption,
            user : req.user._id
        })


        await User.findByIdAndUpdate(req.user._id,{
            $push : {posts : newpost._id}
        })

        const populatedPost = await Post.findById(newpost._id).populate('author','name username profileImage')


        res.status(201).json({message:"Post created",post : populatedPost})




    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Failed to create post',
            error: error.message
        })
    }
}