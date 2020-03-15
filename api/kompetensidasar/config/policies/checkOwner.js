'use strict';

const gdiQuery = require('../../../../config/policies/checkOwner')
const _ = require('lodash')

/**
 * `checkOwner` policy.
 */

module.exports = async (ctx, next) => {
  // check user permission from onefiles global policy
  const checkUser = await gdiQuery('kompetensidasar', strapi, ctx)
  
  // continue if found, and unauthorized if null or empty
  if(_.isEmpty(checkUser)) {
    ctx.unauthorized(`You're not allowed to perform this action!`)
  } else {
    await next()
  }
};
