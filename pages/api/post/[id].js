import connectDB from '../../../utils/connectDB';
import Post from '../../../models/post'

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getPost(req, res);
      break;
     case 'PUT':
       await editPost(req, res);
       break;
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);
    const post = await Post.findById(id);
    if (!post)
      return res.status(400).json({ err: 'This prod does not exist ' });
    res.json({
      post
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const editPost = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);
    const { inputList, inputIstoric, totalpuncte } = req.body;  
    console.log(inputIstoric);

    await Post.findOneAndUpdate({_id: id}, {
      punctearr:inputList,istoric:inputIstoric, puncte:totalpuncte
  })
  res.json({msg: 'Deleted a product.'})
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};