import cookie from 'cookie';

export default function () {
    return (req, res, next) => {
        const cookiesStr = req.get('Cookie');
        if (cookiesStr) {
            req.parsedCookies = cookie.parse(cookiesStr);
            console.debug('Parsed cookies:');
            console.debug(req.parsedCookies);
        }
        next();
    };
}