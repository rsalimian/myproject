var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return "mongodb://" + configValues.uname + ":" +
            configValues.pwd + "@ds119113.mlab.com:19113/todo";
    }

}