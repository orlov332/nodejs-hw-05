import url from 'url';

export default function () {
    return (req, res, next) => {
        req.parsedQuery = url.parse(req.url, true).query;
        console.debug('Parsed query: ');
        console.debug(req.parsedQuery);
        next();
    };
}