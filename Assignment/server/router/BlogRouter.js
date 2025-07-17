import express from 'express'
import { addBlog, allBlogs, deleteBlog, findBlog } from '../controller/blogController.js';
import upload from '../middleware/multer.js';

const blogRouter = express.Router();

blogRouter.post('/add-blog', upload.single('image'), addBlog);
blogRouter.get('/all-blogs', allBlogs);
blogRouter.get('/find-blog/:id', findBlog);
blogRouter.delete('/deleteBlog/:id', deleteBlog);

export default blogRouter;