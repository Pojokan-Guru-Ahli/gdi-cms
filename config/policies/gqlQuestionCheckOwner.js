'use strict';

/**
 * `Debug` policy.
 */

module.exports = async (ctx, next) => {

  const { role, id } = ctx.state.user;

  if (role.name == "Teacher") {

    // get id from query GraphQL
    let fieldId = ctx.query.id

    const query = await strapi.query('questions').findOne({
      id: fieldId
    })

    if(!query.user || query.user.id !== id) {
      ctx.unauthorized(`You're not allowed to perform this action!`)
    } else {
      await next()
    }

  } else {
    ctx.unauthorized(`You're not allowed to perform this action!`)
  }

};
