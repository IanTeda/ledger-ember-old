import Route from '@ember/routing/route';

export default Route.extend({
   /**
   * PAYEE MODEL
   * @param {NUMBER} params 
   * 
   * Return model for payee with id
   */
  model(params) {
    return this.store.findRecord('payee', params.payee_id, { include: 'aliases' });
  },
});
