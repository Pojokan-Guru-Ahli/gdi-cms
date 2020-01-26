'use strict';

/**
 * `setOwner` policy.
 */

module.exports = async (ctx, next) => {

  const { role, id } = ctx.state.user

  if (role.name == "Teacher") {

    const { body } = ctx.request

    if(body.data) {
      
      // parse data string to object
      const parseData = JSON.parse(body.data)

      // inject userid to object
      const injectData = {
        ...parseData,
        user: id
      }

      // parse object to data string
      const newData = JSON.stringify(injectData)

      // set body
      body.data = newData

    } else {
      body.user = id
    }

    return await next();
  }

  ctx.unauthorized(`You're not allowed to perform this action!`);
};
