// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");


router.get("/allposts", requireLogin, async (req, res) => {
  try {
    const posts = await POST.find()
      .populate("postedBy", "_id firstname lastname")
      .select("_id body photos address category postedBy startDate endDate amount");

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




router.post("/createPost", requireLogin, async (req, res) => {
  const { body, pics, category, address, startDate, endDate } = req.body;

  try {
    if (!body || !pics || !category || !address || !startDate || !endDate) {
      return res.status(422).json({ error: "Please enter all fields" });
    }

    // Calculate amount based on the date range
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const diffInDays = Math.ceil((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
    const ratePerDay = 10; // Replace with your own rate per day
    const amount = diffInDays * ratePerDay;

    const post = new POST({
      body,
      photos: pics,
      category,
      address,
      startDate,
      endDate,
      amount, // Add the calculated amount to the post object
      postedBy: req.user,
    });

    const result = await post.save();
    res.json({ post: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// router.delete("/deletePost/:postId", async (req, res) => {
//   try {
//     const postId = req.params.postId;

//     // Use findByIdAndDelete to delete the post and check the result
//     const deletedPost = await POST.findByIdAndDelete(postId);

//     // Check if the post was found and deleted
//     if (!deletedPost) {
//       return res.status(404).json({ error: "Post not found or you're not authorized to delete it" });
//     }

//     res.json({ message: "Post deleted successfully" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // routes/postRoutes.js
// // ... (existing code)

// router.put("/editPost/:postId", requireLogin, async (req, res) => {
//   const postId = req.params.postId;
//   const { body, pics, category, address, startDate, endDate } = req.body;

//   try {
//     // Check if the post exists and is created by the logged-in user
//     const post = await POST.findOne({ _id: postId, postedBy: req.user._id });
//     if (!post) {
//       return res.status(404).json({ error: "Post not found or you're not authorized to edit it" });
//     }

//     // Update the post fields
//     post.body = body;
//     post.photos = pics;
//     post.category = category;
//     post.address = address;
//     post.startDate = startDate;
//     post.endDate = endDate;

//     // Calculate and update the amount based on the date range
//     const startDateObj = new Date(startDate);
//     const endDateObj = new Date(endDate);
//     const diffInDays = Math.ceil((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
//     const ratePerDay = 10; // Replace with your own rate per day
//     post.amount = diffInDays * ratePerDay;

//     // Save the updated post
//     const result = await post.save();

//     res.json({ post: result });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });




module.exports = router;
