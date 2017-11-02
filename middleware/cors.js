module.exports = (req, res, next) => {
    console.log({ req, res });
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'content-type, application/json'
    );
    next();
}