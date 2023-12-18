const handleRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Лабораторна робота №10. Networking');
    } else if (req.url === '/first_name') {
        res.statusCode = 200;
        res.end('Ваше ім\'я');
    } else if (req.url === '/last_name') {
        res.statusCode = 200;
        res.end('Ваше призвіще');
    } else if (req.url === '/age') {
        res.statusCode = 200;
        res.end('Ваш вік');
    } else {
        res.statusCode = 404;
        res.end('Сторінка не існує');
    }
};

module.exports = {
    handleRequest,
};
