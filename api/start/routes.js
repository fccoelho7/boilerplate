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

/* Public Routes */
Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('signup', 'UserController.store')
}).prefix('api/v1')

/* Protected Routes */
Route.group(() => {
  Route.post('account', 'AccountController.store')
  Route.get('me', 'UserController.show')
  Route.put('me', 'UserController.update')
  Route.resource('posts', 'PostController').apiOnly()
})
  .prefix('api/v1')
  .middleware('auth')
