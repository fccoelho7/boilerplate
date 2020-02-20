'use strict'

class PostController {
  async index({ auth }) {
    const { user } = auth

    return await user.posts().fetch()
  }

  async show({ auth, params }) {
    const { user } = auth

    return await user
      .posts()
      .where('id', params.id)
      .first()
  }

  async store({ auth, request }) {
    const { user } = auth
    const data = request.only(['title', 'content'])

    const post = await user.posts().create(data)

    return post
  }

  async update({ auth, params, request }) {
    const { user } = auth
    const data = request.only(['title', 'content'])

    return await user
      .posts()
      .where('id', params.id)
      .update(data)
  }

  async destroy({ auth, params }) {
    const { user } = auth

    return await user
      .posts()
      .where('id', params.id)
      .delete()
  }
}

module.exports = PostController
