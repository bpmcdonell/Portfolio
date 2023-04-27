const { FormRes } = require('../models/index');

const resolvers = {
    Query: {
        formRes: async () => {
            return FormRes.find();
        }
    },
    Mutation: {
        postFormRes: async (parent, { name, email, message }) => {
            const formRes = await FormRes.create({ name, email, message });
            return formRes;
        }

    }
};

module.exports = resolvers;



