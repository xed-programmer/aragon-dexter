import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js';

// Add a Comment
const addComment = async (req, res) => {
    // TODO: Implement the functionality to add a comment to a blog post
    try{
        const {text, blog} = req.body;
        const comment = await Comment.create({text, blog, user:req.user._id});
        res.status(201).json(comment);
    }catch (err){
        res.status(500).json({ error: 'Server Error: '+err});
    }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
    // TODO: Implement the functionality to retrieve comments for a specific blog post
    try{
        const { blog } = req.params;
        console.log(blog);
        
        const comments = await Comment.find({blog: blog});
        res.status(200).json(comments);
    }catch (err){
        res.status(500).json({ error: 'Server Error: '+err});
    }
};

// Delete a Comment
const deleteComment = async (req, res) => {
    // TODO: Implement the functionality to delete a specific comment
    try{
        const { commentId } = req.params;
        
        const comment = await Comment.findById(commentId);
        console.log(comment);
        if(!comment) return res.status(404).json({error: 'Comment not found'});
        if(comment.user.toString() !== req.user._id) return res.status(403).json({ error: 'Forbidden Request'});
        
        await comment.deleteOne();
        res.status(200).json(comment);
    }catch (err){
        res.status(500).json({ error: 'Server Error: '+err});
    }
};

export { addComment, getCommentsByBlog, deleteComment };