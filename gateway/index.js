const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");
const morgan = require("morgan");


const app = express();
app.use(morgan('dev'));

function addCustomHeader(req, res, next) {
	req.headers['x-gateway-origin'] = 'gateway';
	next();
  }

app.use("/characters", addCustomHeader, createProxyMiddleware({
	target:"http://characters:8001",
	changeOrigin:true
})
);

app.use("/films", addCustomHeader, createProxyMiddleware({
	target:"http://films:8002",
	changeOrigin:true
})
);

app.use("/planets", addCustomHeader, createProxyMiddleware({
	target:"http://planets:8003",
	changeOrigin:true
})
);

app.use("/users", createProxyMiddleware({
	target:"http://users:8004",
	changeOrigin:true
})
);

app.listen(8000)