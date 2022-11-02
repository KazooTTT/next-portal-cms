"use strict";

/**
 * layout controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { removeTime, removeAttrsAndId } = require("../../../utils/index.js");

module.exports = createCoreController("api::layout.layout", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };
    const { data } = await super.find(ctx);
    // 取data[0]是因为只有一个layout
    return removeAttrsAndId(removeTime(data[0]));
  },
}));
