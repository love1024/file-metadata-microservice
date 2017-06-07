let multer = require("multer");
let storage = multer.memoryStorage();
let upload = multer({
    storage:storage
})

module.exports = function(app) {

    app.route("/upload")
        .post(upload.single('file'),hello)

	function hello(req,res) {
        res.send({size:req.file.size});
	}

}
