'use strict'

const User = use('App/Models/User')

class AuthController {
  async login({ auth, request, response }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    const user = await User.findBy({ email })

    response.json({ token, user })
  }
}

module.exports = AuthController
