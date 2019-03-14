import jwt from 'jsonwebtoken';

export default function () {
    return (req, res, next) => {
        const token = req.headers['x-access-token'];
        if (token)
            jwt.verify(token, 'secret', (err, decoded) => {
                if (err)
                    res.status(403).send({success: false, message: 'Filed to authenticate token'});
                else {
                    console.debug(decoded);
                    next();
                }
            });
        else
            res.status(403).send({success: false, message: 'No token provided'});
    };
}