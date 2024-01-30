module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        }, 
        country: {
            type: 'string'
        },
        city: {
            type: 'string',
            required: true
        },
        address: {
            type: 'string'
        }
    }

}