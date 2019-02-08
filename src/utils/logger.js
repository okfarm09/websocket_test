const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:'main.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },
    logger = SimpleNodeLogger.createSimpleFileLogger( opts );
module.exports = logger;