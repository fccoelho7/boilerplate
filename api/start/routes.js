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

Route.group(() => {
  Route.post('auth/login', 'AuthController.login')
  Route.post('register', 'UserController.store')
  Route.post('account', 'AccountController.store').middleware('auth')
  Route.get('me', 'UserController.show').middleware('auth')
  Route.put('me', 'UserController.update').middleware('auth')
  Route.resource('posts', 'PostController').middleware('auth')
}).prefix('api/v1')
