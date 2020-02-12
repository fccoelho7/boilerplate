'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const AccountModel = use('App/Models/Account')

class Account {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, request }, next) {
    const { user } = auth

    request.account = await AccountModel.find(user.account_id)

    await next()
  }
}

module.exports = Account
