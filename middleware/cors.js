module.exports = (req, res, next) => {
    console.log({ req });
    console.log({ res });
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-type, Authorization, Origin, X-Requested-With, Content-Type, Accept');
    next();
}