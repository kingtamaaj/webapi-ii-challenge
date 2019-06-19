const express = require('express');

const Posts = require('./db.js');

const router = express.Router();


router.get('./', async (req, res) =>{
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving posts'
        });
    }
});

// api/posts/:id
router.get('/:id', async (req, res) =>{
    try {
        const post = await 
        Posts.findById 
        (req.params.id);

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: 'Post not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving post',
        });
    }
});

// post

router.post('./', async)






module.exports = router;