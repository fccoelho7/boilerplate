'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const { email, password } = request.all()
    const user = new User()

    user.email = email
    user.password = password

    const data = await user.save()

    return response.json(data)
  }
}

module.exports = UserController
