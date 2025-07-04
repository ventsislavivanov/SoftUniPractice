import { User } from '../models/User.js';
import bcrypt from 'bcrypt';

//TODO set identity prop name based on exam description
const identityName = 'email';

async function register(identity, password) {
    const existing = await User.findOne({ [identityName]: identity });

    if (existing) {
        throw new Error(`This ${identityName} is already taken`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        [identityName]: identity,
        password: hashedPassword
    });

    await user.save();

    return user;
}

async function login(identity, password) {
    const user = await User.findOne({ [identityName]: identity });

    if (!user) {
        throw new Error('Invalid credentials');
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw new Error('Invalid credentials');
    }

    return user;
}

export { register, login };