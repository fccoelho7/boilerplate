'use strict'

const Account = use('App/Models/Account')

class AccountController {
  async store({ auth, request, response }) {
    const { user } = auth
    const { name } = request.all()
    const account = new Account()

    account.merge({ name })

    await account.save()

    user.account_id = account.id

    await user.save()

    response.json(account)
  }
}

module.exports = AccountController
