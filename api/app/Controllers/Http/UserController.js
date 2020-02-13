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

  async show({ auth }) {
    const user = await User.find(auth.user.id)

    return user
  }

  async update({ auth, request }) {
    const data = request.only(['password', 'firstName', 'lastName'])
    const user = await User.find(auth.user.id)

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
