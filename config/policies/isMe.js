'use strict';

/**
 * `isMe` policy.
 */

module.exports = async (ctx, next) => {

  const user = ctx.state.user;

  if (user.role.name == "Teacher") {
    ctx.query = {
      ...ctx.query,
      user: user.id
    }

    return await next();
  }

  ctx.unauthorized(`You're not allowed to perform this action!`);
};
