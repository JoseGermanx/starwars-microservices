const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");
const morgan = require("morgan");
const { validateToken } = require("./middlewares");


const app = express();
app.use(morgan('dev'));

function addCustomHeader(req, res, next) {
	req.headers['x-gateway-origin'] = 'gateway';
	next();
  }

app.use("/characters", validateToken, addCustomHeader, createProxyMiddleware({
	target:"http://characters:8001",
	changeOrigin:true
})
);

app.use("/films", validateToken, addCustomHeader, createProxyMiddleware({
	target:"http://films:8002",
	changeOrigin:true
})
);

app.use("/planets", validateToken, addCustomHeader, createProxyMiddleware({
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