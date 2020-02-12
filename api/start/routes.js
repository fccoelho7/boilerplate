'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('auth/login', 'AuthController.login')
  Route.post('register', 'UserController.store')
  Route.get('xunda', 'UserController.xunda').middleware(['auth', 'account'])
  Route.post('account', 'AccountController.store').middleware('auth')

  // Route.resource('blog', 'BlogController').middleware('auth')
}).prefix('api/v1')
