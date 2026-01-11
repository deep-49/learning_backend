const sumRequestHandler =(req, res)=>{
    console.log('Sum request handler invoked');
    const body=[];
    req.on('data',(chunk)=>{
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();  
        const parms = new URLSearchParams(parsedBody);
        const bodyobj= Object.fromEntries(parms.entries()); 
        console.log(bodyobj);
        const num1= parseInt(bodyobj.num1);
        const num2= parseInt(bodyobj.num2);
        const sum = num1 + num2; 
        console.log (sum);
         res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculation Result</title></head>');
    res.write('<body>');
    res.write('<h1>Calculation Result</h1>');
    res.write(`<p>The sum is: ${sum}</p>`);
    res.write('<a href="/cal">Go back to Calculator</a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    });
   
}
exports.sumRequestHandler = sumRequestHandler;