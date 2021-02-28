import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from './../model/user.model.mjs';

export {
    authenticate,
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};

async function authenticate({username, password}) {
    const user = await User.findOne({email: username});

    if (!user)
        throw 'User not found.';

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({sub: user.id}, 'mongodb+srv://leo:vIRWombRTsUNuxid@cluster0.ihqlb.mongodb.net/local_db?retryWrites=true&w=majority', {expiresIn: '7d'});
        return { ...user.toJSON(), token };
    }
}

async function getAllUser() {
    return await User.find();
}

async function getUserById(id) {
    return await User.findById(id);
}

async function createUser(userInfos) {
    if (await User.findOne({ email: userInfos.email })) {
        throw 'User already exists.'
    }

    const newUser = new User(userInfos);
    if (newUser.password) {
        newUser.password = bcrypt.hashSync(userInfos.password, 10);
    }
    await newUser.save();
    return newUser;
}

async function updateUser(id, userInfos) {
    const usr = await User.findById(id);

    if (!usr)
        throw 'User not found';

    if (user.email !== userInfos.email && await User.findOne({ email: userInfos.email })) {
        throw 'Username "' + userInfos.username + '" is already taken';
    }

    if (userInfos.password) {
        userInfos.password = bcrypt.hashSync(userInfos.password, 10);
    }

    Object.assign(user, userInfos);
    await user.save();
}

async function deleteUser(id) {
    await User.findByIdAndRemove(id);
}