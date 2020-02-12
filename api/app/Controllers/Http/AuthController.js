'use strict'

const User = use('App/Models/User')

class AuthController {
  async login({ auth, request }) {
    const { email, password } = request.only(['email', 'password'])
    const token = await auth.attempt(email, password)
    const user = await User.findBy({ email })

    return { token, user }
  }
}

module.exports = AuthController
