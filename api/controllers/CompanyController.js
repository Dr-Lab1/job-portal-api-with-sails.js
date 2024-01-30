module.exports = {
    
    async create(req, res) {
        try {
            let params = req.allParams();

            if(!params.name)
                res.badRequest({err : "Name field is required"});
            if(!params.description)
                res.badRequest({err : "Description field is required"});

            const results = await Company.create({
                "name": params.name,
                "description": params.description,
                "country": params.country,
                "city": params.city,
                "address": params.address,
            });
            return res.ok(results);
        } catch (err) {
            return res.serverError(err);
        }
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