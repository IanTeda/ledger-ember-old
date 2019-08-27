import EmberRouter from '@ember/routing/router';
import config from './config/environment';

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
    // Create a Payee
    this.route('create');
    // Read a payee
    this.route('read', { path: '/:payee_id' });
  });


});

export default Router;
