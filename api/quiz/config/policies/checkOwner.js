'use strict';

/**
 * `checkOwner` policy.
 */

module.exports = async (ctx, next) => {

  const { role, id } = ctx.state.user;

  if (role.name == "Teacher") {
    const { body } = ctx.request

    const fieldId = body.id
    
    Quiz.findOne({
      id: fieldId,
      user: id
    }).then(result => {
      if(!result) {
        return ctx.unauthorized(`You're not allowed to perform this action!`)
      }
    })

    await next()
  } else {
    ctx.unauthorized(`You're not allowed to perform this action!`)
  }
};
