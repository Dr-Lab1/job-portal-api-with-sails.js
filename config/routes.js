/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    'POST /companies' : "CompanyController.create",
    "GET  /companies" : "CompanyController.find",
    "GET  /company/:id" : "CompanyController.findOne",
    "PUT  /company/:id" : "CompanyController.update",
    "DELETE  /company/:id" : "CompanyController.delete",


};
