import connectDB from '../../utils/connectDB';
import Post from '../../models/post';

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { Id, nume, prenume, pluton, companie, batalion, telefon, istoric, puncte } = req.body;

    const newPost = new Post({
      Id,
      nume,
      prenume,
      pluton,
      companie,
      batalion,
      telefon,
      istoric,
      puncte
    });

    await newPost.save();
    res.json({ msg: 'Register Success !' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
