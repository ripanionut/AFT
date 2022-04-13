import connectDB from '../../../utils/connectDB';
import Users from '../../../models/user';
import auth from '../../../middleware/auth';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'PATCH':
      await uploadInfor(req, res);
      break;
  }
  switch (req.method) {
    case 'GET':
      await getUsers(req, res);
      break;
  }
};

const uploadInfor = async (req, res) => {
  try {
    const result = await auth(req, res);
    const { name } = req.body;

    const newUser = await Users.findOneAndUpdate(
      { _id: result.id },
      { name, avatar }
    ).select('-password');

    res.json({
      msg: 'Success update',
      user: { name, avatar, email: newUser.email, role: newUser.role }
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await auth(req, res);
    const users = await Users.find().select("-password")

    res.json({users})
  
  } catch {
    return res.status(500).json( "Bad");
  }
};
