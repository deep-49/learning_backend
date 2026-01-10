const sumRequestHandler = require('./sum').sumRequestHandler;

const home = (req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
       <head><title>Home Page</title></head>
       <body>
       <h1>Welcome to the Calculator!</h1>
       <br>
       <a href="/cal">click here to use calculator</a>
       </body>
     </html>
     `);
        return res.end();
    } else if (req.url === '/cal') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Simple Calculator</h1>');
        res.write('<form action="/calculate" method="POST">');
        res.write('<input type="number" name="num1" placeholder="Enter first number" required>');
        res.write('<input type="number" name="num2" placeholder="Enter second number" required>');
        res.write('<button type="submit">Calculate Sum</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/calculate' && req.method === 'POST') {

    }
};
exports.home = home;



