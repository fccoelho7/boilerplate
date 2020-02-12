'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index({ auth }) {
    const posts = await Post.query()
      .where('account_id', auth.user.account_id)
      .fetch()

    return posts
  }

  async show({ auth, params }) {
    const posts = await Post.query()
      .where('account_id', auth.user.account_id)
      .where('id', params.id)
      .first()

    return posts
  }

  async store({ auth, request }) {
    const data = request.only(['title', 'content'])
    const { user } = auth
    const post = new Post()

    post.merge({
      ...data,
      user_id: user.id,
      account_id: user.account_id
    })

    await post.save()

    return post
  }

  async update({ params, request }) {
    const data = request.only(['title', 'content'])
    const post = await Post.find(params.id)

    post.merge(data)

    await post.save()

    return post
  }

  async destroy({ auth, params }) {
    await Post.query()
      .where('account_id', auth.user.account_id)
      .where('id', params.id)
      .delete()
  }
}

module.exports = PostController
