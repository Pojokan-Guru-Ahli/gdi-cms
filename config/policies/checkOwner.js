'use strict';

/**
 * `checkOwner` policy.
 */

module.exports = async (ctx, next) => {

  const user = ctx.state.user;

  if (user.role.name == "Teacher") {
    const { body } = ctx.request;

    const fieldId = body.id

    const check = await Courses.findOne({
      id: fieldId,
      user: user.id
    })

    if (!check) {
      ctx.unauthorized(`You're not allowed to perform this action!`);
    }

    await next();
  }
};
