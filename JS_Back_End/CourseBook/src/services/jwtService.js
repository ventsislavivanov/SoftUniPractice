import jwt from 'jsonwebtoken';

const secret = '$eCre7 P@$sw0r9';

// TODO use identity name from exam descripition
function createToken(userData) {
    const payload = {
        email: userData.email,
        _id: userData._id,
    }

    return jwt.sign(payload, secret, {
        expiresIn: '1d'
    });
}

function verifyToken(token) {
    return jwt.verify(token, secret);
}

export { createToken, verifyToken };