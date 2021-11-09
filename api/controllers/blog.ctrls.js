'use strict'

const pool = require('../config/initMysqlDb');


// reading all blogs
const readBlogs = async (req, res)=>{
   pool.getConnection((err, connection)=>{
       if(err) console.log(err.message);
       else{
        let query = 'SELECT * FROM blogs';
        connection.query(query, (err, rows)=>{
            connection.release();
            if(err) return res.status(404).json({message: err.message});
            else{
                return res.status(200).json({blogs: rows})
            }
        })
       }
   })
};
// reading blog by id
const readBlogById = async (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) console.log(err.message);
        else{
         let blog_id = req.params.id;
         let query = 'SELECT * FROM blogs WHERE blog_id=?';
         connection.query(query, [blog_id], (err, rows)=>{
             connection.release();
             if(err) return res.status(404).json({message: err.message});
             else{
                 return res.status(200).json({blogs: rows})
             }
         })
        }
    })
};
// creating new blog post
const createBlog = async (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) console.log(err.message);
        else{
         const {blog_title, blog_description} = req.body;
         const query = 'INSERT INTO blogs(blog_title, blog_description) VALUES(?,?)';
         connection.query(query, [blog_title, blog_description], (err, rows)=>{
            connection.release();
             if(err) return res.status(404).json({message: err.message});
             else{
                 return res.status(201).json({message: 'blog created!'})
             }
         })
        }
    })
};
// updating blog by id
const updateBlog = async (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) console.log(err.message);
        else{
         const blog_id = req.params.id;
         const {blog_title, blog_description} = req.body;
         const query = 'UPDATE blogs SET blog_title=?, blog_description=? WHERE blog_id=?';
         connection.query(query, [blog_title, blog_description, blog_id], (err, rows)=>{
            connection.release();
             if(err) return res.status(404).json({message: err.message});
             else{
                 return res.status(201).json({message: 'blog updated!'})
             }
         })
        }
    })
};

const deleteBlog = async (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) console.log(err.message);
        else{
         let blog_id = req.params.id;
         let query = 'DELETE FROM blogs WHERE blog_id=?';
         connection.query(query, [blog_id], (err, rows)=>{
            connection.release();
             if(err) return res.status(404).json({message: err.message});
             else{
                 return res.status(201).json({message: 'blog removed!'})
             }
         })
        }
    })
};


module.exports = {
    readBlogs, readBlogById,
    createBlog, updateBlog, deleteBlog
}