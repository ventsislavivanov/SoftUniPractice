import { verifyToken } from '../services/jwtService.js';

function session() {
    return  function (req, res, next) {
        const token = req.cookies?.token;

        if (token) {
            try {
                const sessionData = verifyToken(token);

                req.user = {
                    email: sessionData.email,
                    _id: sessionData._id,
                };
                res.locals.hasUser = true;
            } catch (e) {
                res.clearCookie('token');
            }
        }

        next();
    }
}

export { session };