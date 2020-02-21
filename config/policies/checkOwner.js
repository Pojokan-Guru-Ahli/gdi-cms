/**
 * `checkOwner` controller policy global and called in local policy.
 */

const _ = require('lodash')

module.exports = async (modelName, strapi, ctx) => {
  const { role, id } = ctx.state.user;

  if (role.name == "Teacher") {
    // make variable to save a data id
    let fieldId = null

    // check if in body have any id
    if (ctx.request.body) {
      fieldId = ctx.request.body.id
    }

    // if body no data, check params
    if (ctx.params.id) {
      fieldId = ctx.params.id
    }

    // build a query to database based id data and userid
    const dataCheck = await strapi.query(modelName).find({
      id: fieldId,
      user: id
    })

    // continue if found, and unauthorized if null or empty
    if (_.isEmpty(dataCheck)) {
      return false
    } else {
      return dataCheck
    }
  } else {
    return false
  }
}