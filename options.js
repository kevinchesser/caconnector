var Options = module.exports = function(username, password, pageSize, collection, query, baseURL){
    this._username = username;  //user and pass will be in environment variables in bluemix
    this._password = password;
    this._pageSize = 0;
    this._collection = collection;
    this._query = query;
    this._baseURL = baseURL;
    this.setPageSize(pageSize);
}

Options.prototype.setPageSize = function(pageSize){
    if(pageSize > 1250){
        this._pageSize = 1250;
        console.log('Must enter a value between 0 and 1250 - Value set to 1250');
    }else if(pageSize < 0){
        this._pageSize = 0;
        console.log('Must enter a value between 0 and 1250 - Value set to 0');
    }else{
        this._pageSize = pageSize;
    }
}

Options.prototype.getUsername = function(){
    return this._username;
}

Options.prototype.getPassword = function(){
    return this._password;
}

Options.prototype.getPageSize = function(){
    return this._pageSize;
}

Options.prototype.getCollection = function(){
    return this._collection;
}

Options.prototype.getQuery = function(){
    return this._query;
}

Options.prototype.getBaseURL = function(){
    return this._baseURL;
}

Options.prototype.setUsername = function(username){
    this._username = username;
}

Options.prototype.setPassword = function(password){
    this._password = password;
}

Options.prototype.setCollection = function(collection){
    this._collection = collection;
}

Options.prototype.setQuery = function(query){
    this._query = query;
}

Options.prototype.setBaseURL = function(baseURL){
    this._baseURL = baseURL;
}
