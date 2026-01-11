const http= require('http');
const fs = require('fs');


const server =http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

if (req.url === '/') {
     res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('<a href="/">Home </a>');
    res.write('<a href="/Men">Men </a>');
    res.write('<a href="/Women">Women </a>');
    res.write('<a href="/Kids">Kids </a>');
    res.write('<a href="/cart">cart </a>');
    res.write('</html>');
    return res.end();

}else if (req.url === '/Men') {



    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mens</title></head>');
    res.write('<body><h1>Welcome to Men Section</h1></body>');
    res.write('</html>');
    return res.end();
} else if (req.url === '/Women') { 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Women</title></head>');
    res.write('<body><h1>Welcome to Women Section</h1></body>');
    res.write('</html>');
    return res.end();   
}else if (req.url === '/Kids') { 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Kids</title></head>');
    res.write('<body><h1>Welcome to Kids Section</h1></body>');
    res.write('</html>');
    return res.end();   
}else if (req.url === '/cart') { 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Cart</title></head>');
    res.write('<body><h1>Welcome to Cart Section</h1></body>');
    res.write('</html>');
    return res.end();   
}
    else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Not Found</title></head>');
    res.write('<body><h1>404 - Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
}
    //process.exit();
});
const port = 3000;
server.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});
//server side code