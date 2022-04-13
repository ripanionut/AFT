import connectDB from '../../../utils/connectDB';
import Post from '../../../models/post'

connectDB();

export default async (req, res) => {
  switch(req.method){
    case "GET":
      await getPosts(req, res);
      break;
    // case 'POST':
    //   await createProduct(req, res);
    //   break;
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.json({
      status: 'success',
      result: posts.length,
      posts
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
