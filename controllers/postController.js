
const Posts = require('../model/posts');


//save post

const savePost = async (req, res) => {
    try {
        const newPost = await Posts.create(req.body);
        return res.status(200).json({
            success: "Post saved successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
};



//delete post
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({
                error: "Post not found"
            });
        }
        return res.status(200).json({
            success: "Post deleted successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
};
//get all post
const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find().exec();
        return res.status(200).json({
            success: true,
            allPosts: posts
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
};

const updatePost = async (req, res) => {
    try {
        const updatedPost = await Posts.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({
                error: "Post not found"
            });
        }
        return res.status(200).json({
            success: "Post updated successfully!"
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message
        });
    }
};

module.exports = {
    savePost,
    deletePost,
    getAllPosts,
    updatePost
};