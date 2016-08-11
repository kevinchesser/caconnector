var request = require("request");
var Options = require('./options.js');

var CASearch = module.exports = function(options) {
    this._options = options;
    this._url = "";
}

CASearch.prototype.search = function(callback){
    this._buildURL();
    request({
	    url: this._url,
	    auth: {
		    user: this._options.getUsername(),
		    password: this._options.getPassword()
	    }
    }, function (err, resp, body){
		if (err) {
			console.error(err);
			return;
		}	
       var bodyJSON = JSON.parse(body);
       callback(bodyJSON);
	});
}



CASearch.prototype._buildURL = function(){ 
    this._url = this._options.getBaseURL() + 'collection=' + this._options.getCollection() + '&output=application/json&pageSize=' + 
        this._options.getPageSize() + '&query=' + encodeURIComponent(this._options.getQuery());
}