'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request, response }) {
    const { email, password, firstName, lastName } = request.all()
    const user = new User()

    user.merge({ email, password, firstName, lastName })

    const data = await user.save()

    return response.json(data)
  }
}

module.exports = UserController
