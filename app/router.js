import EmberRouter from '@ember/routing/router';
import config from './config/environment';

// http://errong.win/2018/06/15/ember-js-add-nested-routes-for-index/

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard');
  this.route('ledger');
  this.route('categories');
  this.route('payees');
  this.route('reports');
  this.route('settings');
  this.route('budgets');
  this.route('payees', function() {
    // NOTE: Index route is implied
    // Create a Payee
    this.route('create', { path: 'create' });
    // Read a payee
    this.route('read', { path: '/:payee_id' });
  });


});

export default Router;
