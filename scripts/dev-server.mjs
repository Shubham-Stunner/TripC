import {createServer} from 'node:http';import{readFileSync,existsSync}from'node:fs';import{extname,join}from'node:path';
const root=process.argv[2]||'.';const types={'.html':'text/html','.css':'text/css','.js':'text/javascript'};
createServer((req,res)=>{let p=req.url==='/'?'/index.html':req.url;let f=join(root,p.split('?')[0]);if(!existsSync(f))f=join(root,'index.html');res.setHeader('content-type',types[extname(f)]||'text/plain');res.end(readFileSync(f));}).listen(5173,()=>console.log('TripC at http://localhost:5173'));
