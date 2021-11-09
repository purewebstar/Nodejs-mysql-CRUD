'use strict'

const express = require('express');
const {createBlog, readBlogs, readBlogById, updateBlog, deleteBlog} = require('../controllers/blog.ctrls');

const router = express.Router();


//--------------

router.get('/blog', readBlogs);
router.get('/blog/:id', readBlogById);

//---------------
router.post('/blog', createBlog);

//---------------
router.put('/blog/:id', updateBlog);

//---------------
router.delete('/blog/:id', deleteBlog);

//---------------


module.exports = router;