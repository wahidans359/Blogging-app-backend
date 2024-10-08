const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//Like a post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: {
          likes: savedLike._id,
        },
      },
      { new: true }
    )
      .populate("likes")
      .populate("comments")
      .exec();

    res.status(200).json({
      success: true,
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error occured while liking the post",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    //find and delete the like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
        post,
      {
        $pull: {
          likes: deletedLike._id,
        },
      },
      { new: true }
    )
    .populate("likes")
    .exec();

    res.status(200).json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while unliking post",
    });
  }
};
