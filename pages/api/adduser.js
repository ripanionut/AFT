import connectDB from '../../utils/connectDB';
import User from '../../models/user';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const {  nume, prenume, email, telefon, password,cf_password } = req.body;

    const  newUser = new User({
      nume,
      prenume,
      email,
      telefon,
      password,
      cf_password
      
    });

    await newUser.save();
    res.json({ msg: 'Register Success !' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
