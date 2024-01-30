module.exports = {
    create(req, res) {
        
        // get all params from the request
        let params = req.allParams();

        // verified the required params
        if(!params.name) {
            return res.badRequest({err: 'name is required'});
        }
        if(!params.description) {
            return res.badRequest({err: 'description is required'});
        }
        
        // store datas in db
        Company.create(
            {
                "name": params.name,
                "description": params.description,
                "country": params.country,
                "city": params.city,
                "address": params.address,
            }
        )  
        .then(results => {
            return res.ok(results);
        })
        .catch (err =>{
            return res.serverError(err);
        });
    },
    
    find(req, res) {
        // let companies = Company.all();
        // return res.send(companies);
    },

    findOne(req, res) {

    },

    update(req, res) {

    },

    delete(req, res) {

    },
}