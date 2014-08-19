////STREAM-ADVENTURE
//-----LESSON10

var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();
process.stdin.pipe(tr);

var trr = through(function (buf) {
	this.queue(buf.toString().toUpperString());
});

var loud = tr.select('.loud');
var loudstream = loud.createStream();

loudstream.pipe(trr).pipe(process.stdout);

// loudstream.pipe(process.stdout);

// tr.pipe(process.stdout);



// var str = tr.select('.loud');

// str.pipe(trr).pipe(process.stdout);


// var str = tr.select('.loud');
// var stream = str.createStream();
// stream.pipe(trr).pipe(process.stdout);

// str.pipe(trr).pipe(stream).pipe(process.stdout);
//str.pipe(process.stdout);

//.pipe(process.stdout);
//console.log(str.toString().toUpperCase());
// str.pipe




// //-----LESSON09
// var ws = require('websocket-stream');
// var stream = ws('ws:http://localhost:8000');
// stream.write('hello\n');

// //-----LESSON08
// var req = require('request');
// var tr = require('through');
// var r = req.post('http://localhost:8000');
// process.stdin.pipe(r);
// r.pipe(process.stdout);

// //-----LESSON07
// var http = require('http');
// var tr = require('through');
// var server = http.createServer(function(req,res){
	// if(req.method != 'POST')
		// res.end('send me POST\n');
	// req.pipe(tr(function (write) {
		// this.queue(write.toString().toUpperCase());
	// })).pipe(res);
	
// });
// server.listen(process.argv[2].toString());

// //-----LESSON06
// var concat = require('concat-stream');
// process.stdin.pipe(concat(function (txt) {
	// var b = txt.toString();
	// var a = "";	
	// for(var i = b.length; i > 0; i--)
	// {
		// a += b.substr(i-1,1);
	// }
	// console.log(a);
// }));

// //-----LESSON05
// var through = require('through');
// var split = require('split');
// var i=0;
// var z = through(function (line) {
	// if((i+1) % 2 == 0)
		// this.queue(line.toString().toUpperCase() + "\n");
	// else this.queue(line.toString().toLowerCase() + "\n");
	// i++;
	
// });
// process.stdin.pipe(split()).pipe(z).pipe(process.stdout);


// //-----LESSON04
// var through = require('through');
// var tr = through(write);
// process.stdin.pipe(tr).pipe(process.stdout);
// function write (buf) { this.queue(buf.toString().toUpperCase()); }


// //-----LESSON03
// process.stdin.pipe(process.stdout);

// //-----LESSON02
// var fs = require('fs');
// fs.createReadStream(process.argv[2].toString()).pipe(process.stdout);


// //-----LESSON01
// console.log("beep boop");


////LEARNYOUNODE
// //-----LESSON13
// var http = require('http');
// var url = require('url');
// var map = require('through2-map');

// http.createServer(function(req,res){
	
	// res.writeHead(200,{'content-Type':'application/json'});
	// res.end(parse(req.url));
	
// }).listen(process.argv[2].toString());

// var parse = function(requrl){
	
	// var a = url.parse(requrl,true);
	// var date = new Date(a.query.iso);
	// console.log(a.pathname);
	// if(a.pathname == '/api/parsetime')
		// return JSON.stringify({"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()});
	// if(a.pathname == '/api/unixtime')
		// return JSON.stringify({'unixtime':date.getTime()});
		
// };

// var log = function(text){console.log(text)};

// //-----LESSON12
// var map = require('through2-map');
// var http = require('http');

// http.createServer(function(req,res){
	// if(req.method != 'POST')
		// return res.end('send me posted');
		
	// req.pipe(map(function(chunk){
		// return chunk.toString().toUpperCase();
	// })).pipe(res);
// }).listen(process.argv[2].toString());

// //-----LESSON11
// // var http = require('http');
// // var fs = require('fs');

// // var server = http.createServer(function(req,res){
	// // var a = fs.createReadStream(process.argv[3].toString());
	// // var body = "";
	// // a.on('data',function(chunk){
		// // body += chunk;
	// // });
	// // a.on('end',function(){
		// // res.write(body);
		// // res.end();
	// // });
// // });
// // server.listen(process.argv[2].toString());

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
  // res.writeHead(200, { 'content-type': 'text/plain' })

  // fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))

// //-----LESSON10
// var net = require('net');

// function zeroFill(i){
	// return i < 10 ? "0"+i : i;
// }

// function now () {
	// var d = new Date();
	// return d.getFullYear() + "-" + zeroFill(d.getMonth() + 1) + "-" + zeroFill(d.getDate()) + " " + zeroFill(d.getHours()) + ":" + zeroFill(d.getMinutes());
// }

// var server = net.createServer(function(socket){
	// socket.end(now() + '\n')
// });

// server.listen(process.argv[2].toString());


// //-----LESSON 9
// var http = require('http');

// links = [];

// // links.push({link : "a"});
// // links.push({link : "b"});
// for(var i = 2; i <5; i++)
// {
	// links.push({link:process.argv[i].toString()});
// }
// // links[0].text = "asdf";

// var callback = function(ht)
// {
	// return function(){
		// http.get(ht.link,function(res){
			// ht.text = "";
			
			// res.on("data",function(data){
				// ht.text += data;
				// // console.log(data);
			// });
			
			// res.on("end",function(){
				// callbackCount++;
				// if(callbackCount == 3)
					// links.forEach(function(ht){
						// console.log(ht.text);
					// });
			// });
		// });
	// };
// };

// var callbackCount = 0;
// links.forEach(function(link){callback(link)();});



// //-----LESSON 8
// var http = require('http');
// var link = process.argv[2].toString();

// var count = 0;
// var body = '';

// http.get(link,function(res){
	// // res.setEncoding('utf-8');
	// res.on("data",function (data) {
		// body += data;
		// count += data.length;
	// });
	// res.on('end',function(){
		// console.log(count);
		// console.log(body);
	// });
// });

// //-----LESSON 7
// var http = require('http');
// var link = process.argv[2].toString();

// var res = [];

// http.get(link,function(response){
	// response.setEncoding('utf-8');
	// response.on("data",function(data){
		// console.log(data.toString());
	// });
// });

// //-----LESSON 6
// var mymodule = require('./mymodule.js');
// var dir = process.argv[2].toString();
// var ext = process.argv[3].toString();
 
// mymodule(dir,ext,function(err,data){

	// if (err)
		// console.log(err);
	// // data.forEach(function(d){
		// // console.log(d);
	// // });
	// console.log(data.join('\n'));
// });

// //-----LESSON 5
// var fs = require('fs');
// var path = require('path');
// var dir = process.argv[2];
// var a = fs.readdir(dir,function(err,data){
	// data.forEach(function(b){
		// if(path.extname(b) == '.md')
			// console.log(b.toString());
	// });
// });


////-----LESSON 4
// var fs = require('fs');
// var a = fs.readFile(process.argv[2],function(err,data){
	// if (err) throw err;
	// console.log(data.toString().split('\n').length-1);	
// });


// //-----LESSON 3
// var fs = require('fs');
// var a = fs.readFileSync(process.argv[2]);
//console.log(a.toString().split('\n').length-1);


////-----LESSON 2
// var sum = 0;
// for(x = 2; x < process.argv.length;x++)
// {
	// sum += +process.argv[x];
// }
// console.log(sum);


////-----LESSON 1
// // console.log(process.argv);

