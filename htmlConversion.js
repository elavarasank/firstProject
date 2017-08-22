var mammoth = require("mammoth");
var fs = require('fs');
mammoth.convertToHtml({path: "convert.docx"})
.then(function(result){
	var html=result.value;
	var messages=result.messages;
	fs.writeFile('output.html',html,function(err){if(err){console.log("html writing error= "+err)}});
})
.done();
mammoth.extractRawText({path:"convert.docx"})
.then(function(result){
	var text=result.value;
	var messages=result.messages;
})
.done();