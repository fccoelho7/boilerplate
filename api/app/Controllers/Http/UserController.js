'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ auth, request }) {
    const data = request.only(['email', 'password', 'firstName', 'lastName'])
    const user = new User()

    user.merge(data)

    await user.save()

    const { token } = await auth.generate(user)

    return { user, token }
  }

  async show({ auth }) {
    return auth.user
  }

  async update({ auth, request }) {
    const { user } = auth
    const data = request.only(['password', 'firstName', 'lastName'])

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
