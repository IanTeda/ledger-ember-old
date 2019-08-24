import Controller from '@ember/controller';
import { inject } from '@ember/controller';

export default Controller.extend({

  // Inject Payees controller to send action to
  payees: inject('payees'),

  actions: {
    createPayee() {
      // Send action to Payees Controller
      this.get('payees').send('createPayee', 
        this.name, 
        this.image, 
        this.website, 
        this.description, 
      );
    }
  },

});
