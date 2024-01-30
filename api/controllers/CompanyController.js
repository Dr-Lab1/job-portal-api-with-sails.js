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
    
    async find(req, res) {
        try {
            const companies = await Company.find();
            return res.ok({companies : companies});
        } catch (err) {
            return res.notFound(err);
        }
    },

    async findOne(req, res) {
        try {
            
        } catch (error) {
            
        }
    },

    update(req, res) {

    },

    delete(req, res) {

    },
}