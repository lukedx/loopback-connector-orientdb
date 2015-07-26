// Require the DB driver
var orient = require('node-graph-service');
// Require the base SqlConnector class
var SqlConnector = require('loopback-connector').SqlConnector;

/**
 * Initialize the  connector against the given data source
 *
 * @param {DataSource} dataSource The loopback-datasource-juggler dataSource
 * @param {Function} [callback] The callback function
 */
exports.initialize = function initializeDataSource(dataSource, callback) {
    throw ("Not implemented");
};