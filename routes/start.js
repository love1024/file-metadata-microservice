import request from 'request';

module.exports = function(app,db) {

    app.route("/hello")
        .get(hello)

	function hello(req,res) {
		res.send("hello");
	}

}
