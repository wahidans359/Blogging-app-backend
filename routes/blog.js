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