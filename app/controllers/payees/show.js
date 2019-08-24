import Controller from '@ember/controller';
import { inject } from '@ember/controller';

export default Controller.extend({

  // Inject Payees controller to send action
  payees: inject('payees'),

  actions: {
    updatePayee(){
      // Send action to Payees Controller
      this.get('payees').send('updatePayee', this.model);
    }
  },

});
