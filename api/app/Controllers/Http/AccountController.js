'use strict'

const Account = use('App/Models/Account')

class AccountController {
  async store({ auth, request }) {
    const data = request.only(['name'])
    const { user } = auth
    const account = new Account()

    account.merge(data)

    await account.save()

    user.merge({ account_id: account.id })

    await user.save()

    return account
  }
}

module.exports = AccountController
