'use strict';

/**
 * `setOwner` policy.
 */

module.exports = async (ctx, next) => {

  const user = ctx.state.user;

  if (user.role.name == "Teacher") {
    const { body } = ctx.request;

    body.user = user.id;

    return await next();
  }

  ctx.unauthorized(`You're not allowed to perform this action!`);
};
