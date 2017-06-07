let multer = require("multer");
let upload = multer({
    dest:"/upload"
})

module.exports = function(app) {

    app.route("/upload")
        .post(upload.single('file'),hello)

	function hello(req,res) {
        res.send({size:req.file.size});
	}

}
