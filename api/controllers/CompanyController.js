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
            let params = req.allParams();

            if(!params.id)
                return res.badRequest({err : "id is required"});

            const company = await Company.findOne({ id : params.id});
            
            if (company != null) {
                return res.ok({company : company});
            } else {
                return res.notFound();
            }
        } catch (error) {
            return res.notFound(err);
        }
    },

    async update(req, res) {
        try {
            let params = req.allParams();
            let attributes = {};

            if(!params.id)
                return res.badRequest({err : "id is required"});
            if(!params.name)
                return res.badRequest({err : "Name field is required"});
            if(!params.description)
                return res.badRequest({err : "Description field is required"});

            attributes.name = params.name;
            attributes.description = params.description;

            if(params.country)
                attributes.country = params.country;
            if(params.city)
                attributes.city = params.city;
            if(params.address)
                attributes.address = params.address;

            const company = await Company.update({id : params.id}, attributes);

            return res.ok(company);

        } catch (err) {
            return res.serverError(err);
        }
    },

    async delete(req, res) {
        try {
            let params = req.allParams();
            if(!params.id)
                res.badRequest({err : "id field is required"});

            const results = await Company.destroy({id : params.id});
            return res.ok(results);
        } catch (err) {
            return res.serverError(err);
        }
    },
}