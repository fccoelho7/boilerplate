'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['email', 'password', 'firstName', 'lastName'])
    const user = new User()

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
