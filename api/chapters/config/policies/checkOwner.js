'use strict';

/**
 * `checkOwner` policy.
 */

module.exports = async (ctx, next) => {

  const user = ctx.state.user;

  if (user.role.name == "Teacher") {
    const { body } = ctx.request;

    const fieldId = body.id

    Chapters.findOne({
      id: fieldId,
      user: id
    }).then(result => {
      if (!result) {
        return ctx.unauthorized(`You're not allowed to perform this action!`)
      }
    })

    await next();
  } else {
    ctx.unauthorized(`You're not allowed to perform this action!`)
  }
};
