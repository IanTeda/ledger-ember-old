import Route from '@ember/routing/route';

/**
 * PAYEE ROUTE
 * Route to show a single Payee
 */
export default Route.extend({

  /**
   * PAYEE MODEL
   * @param {number} params 
   * 
   * Return model for payee with id
   */
  model(params) {
    return this.store.findRecord('payee', params.payee_id);
  },

});
