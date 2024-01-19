import User from "../models/user.models.js";

export const user = async (req, res) => {
    const {userName} = req.body;

    const newUser = await User({userName});

    try {
        await newUser.save();
        res.status(200).json("Name has been added bhai");
    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'userName');

        // console.log(users);
        const userNames = users.map(user => user.userName);
// console.log(userNames);

        res.status(200).json({ userNames });

        
    } catch (error) {
        console.error('Error fetching all users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};