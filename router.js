const url = require("url");
const fs = require("fs");

module.exports = function(req, res){
	//res.setHeader("Access-Control-Allow-Origin","*");

	//解析请求的路径地址
	let urlinfo = url.parse(req.url, true);

	//根据不同的地址，调用不同的程序处理
	for(let path in URLMapping) {
		if( new RegExp(path).test(urlinfo.pathname) )  {
			URLMapping[path](urlinfo, res);
			break;
		}
	}
}

const URLMapping = {
	"\/$" : require("./ajax/index.js"),
	"\.html$" : require("./ajax/html.js"),
	"\.css$" : require("./ajax/css.js"),
	"\.js$" : require("./ajax/script.js"),
	"\.json$" : require("./ajax/json.js"),
	"\.ico$" : require("./ajax/ico.js"), 
	"\.(jpg|jepg|png|gif)$" : require("./ajax/image.js"),
	"\/checkname" : require("./ajax/checkname.js"),
	"\/waterfall$" : require("./ajax/waterfall.js"),
	"\/proxy" : require("./ajax/proxy.js"),
	"\/tweets" : require("./ajax/tweets.js")
}

