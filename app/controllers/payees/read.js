import Controller from '@ember/controller';
import { inject } from '@ember/controller';

export default Controller.extend({

    // Inject Payees controller to send action
    payees: inject('payees'),

    actions: {
      createPayee(){
        this.get('payees').send('createPayee');
      },

      updatePayee(){
        // Send action to Payees Controller
        this.get('payees').send('updatePayee', this.model);
      },
      
      mergePayee(){
        this.get('payees').send('mergePayee');
      },

      deletePayee() {
        this.get('payees').send('deletePayee', this.model);
      }
    },

});
