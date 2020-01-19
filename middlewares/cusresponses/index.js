module.exports = strapi => {
    return {
        initialize() {
            strapi.app.use(async (ctx, next) => {
                try {
                    await next();
                } catch (error) {

                    // custom responses
                    
                    ctx.status = 500
                    ctx.body = error

                    // throw error;
                }
            });
        },
    };
};