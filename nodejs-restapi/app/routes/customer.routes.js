module.exports = function(app) {

    var customers = require('../controllers/customer.controller.js');
   
    // Create a new Customer
    app.post('/api/addcustomer', customers.create);

    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);

    app.get('/api/getvotecount',customers.getVoteCount)

    app.post('/api/castvote/:id',customers.update)
    
}