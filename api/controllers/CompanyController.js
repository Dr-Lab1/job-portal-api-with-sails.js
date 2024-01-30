module.exports = {
    create(req, res) {
        
        // get all params from the request
        let params = req.allParams();
        if (!params.name) {
            return res.badRequest({err: "name is required"});
        }
        if (!params.description) {
            return res.badRequest({err: "description is required"});
        }
        // store datas in db
        Company.create(
            {
                "name": params.name,
                "description": params.description,
                "country": params.country,
                "city": params.city,
                "address": params.address,
            }, (err, results) => {
                if (err) {
                    res.badRequest(err);
                }

                return res.ok(results);
            }
        );

        return params;
    },
    
    find(req, res) {
        res.ok("ok");
    },

    findOne(req, res) {

    },

    update(req, res) {

    },

    delete(req, res) {

    },
}