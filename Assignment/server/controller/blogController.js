import Blog from "../models/blog.js";
import fs from 'fs';
import imagekit from "../config/imageKit.js";

// add blogs
export const addBlog =  async(req, res) => {
  try {
    const { title, description, category } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    if (!title || !description || !category) {
      return res.json({ success: false, message: 'Please fill all the fields' });
    }

    const fileBuffer = fs.readFileSync(imageFile.path)

    // Upload image to Imagekit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/myblogs"
    });

    console.log(response);

    // optimization through imagekit URL transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        {quality: 'auto'}, // Auto compression
        {format: 'webp'}, // Convert to modern format
        {width: '1280'} // Width resizing
      ]
    });

    const image = optimizedImageUrl;

    await Blog.create({ title, description, category, image });
    res.json({ success: true, message: 'Blog added successfully'});

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// get all blogs
export const allBlogs = async (req, res) => {
  try {

    const blogs = await Blog.find();
    
    res.json({ success: true, blogs });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// find blog by ID
export const findBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const blog = await Blog.findById(id);
    
    res.json({ success: true, blog });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// delete blog
export const deleteBlog = async (req, res) => {
  try {

    const id = req.params.id;
    await Blog.findByIdAndDelete(id);
    res.json({ success: true, message: 'blog deleted successfully' });
    
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};