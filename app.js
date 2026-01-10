const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
   // console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Myntra</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');

        res.write('</html>');
        return res.end();

    } else if (req.url === '/about') {



        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My About Page</title></head>');
        res.write('<body><h1>I am the about for u</h1></body>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username"  placeholder="Enter your name">');
        res.write('<input type="radio" name="gender" value="male">Male</input>');
        res.write('<input type="radio" name="gender" value="female">Female</input>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>')
        res.write('</html>');
        return res.end();
    }
    else if (req.url.toLowerCase() === '/submit-details' &&
        req.method === 'POST') {
            const body = [];

            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            return req.on('end', () => {
               const fullbody= Buffer.concat(body).toString(); //buffering and reading chunks
               console.log(fullbody);

              const parms= new URLSearchParams(fullbody);
            //   const bodyobject={};
            //     for(const[key,value] of parms.entries()){ //to get object view
            //         bodyobject[key]=value;
            //     }
            const bodyobject=Object.fromEntries(parms.entries()); //directly converting to object
                 console.log(bodyobject);
                fs.writeFileSync('user.txt', JSON.stringify(bodyobject)); //storing data in user.txt file
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });
    
    }

    else {
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
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/about`);
});