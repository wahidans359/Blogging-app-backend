//API routes 

//Test this on Postman

//To create a post
//(POST METHOD) :- http://localhost:4000/api/v1/posts/create
/*
    {
        "title" : "This is a Title",
        "body" : "This is a body"
    }
*/


//To fetch all posts
//(GET METHOD) :- http://localhost:4000/api/v1/getAllPost

//To comment a post
//(POST METHOD) :- http://localhost:4000/api/v1/comments/create
/*
    {
        "post" : "661fbd3295af854f4659fcf6",
        "user" : "This is a user",
        "body" : "This is a body"
    }
*/

//To like a post
//(POST METHOD) :- http://localhost:4000/api/v1/like
/*
    {
        "post" : "661fbd3295af854f4659fcf6",
        "user" : "This is a user"
    }
*/

//To unlike a post
//(POST METHOD) :- http://localhost:4000/api/v1/like
/*
    {
        "post" : "661fbd3295af854f4659fcf6",
        "like" : "66211ff0684e87f69c06190a"
    }
*/
const express = require('express');
const router = express.Router();


//Import controller
const {likePost,unlikePost} = require('../controllers/LikeController');
const {createComment} = require("../controllers/CommentController");
const {createPost,getAllPost} = require("../controllers/PostController");

//Mapping Create
router.post("/like",likePost);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/getAllPost",getAllPost);
router.post("/likes/unlike",unlikePost);

//export
module.exports = router;