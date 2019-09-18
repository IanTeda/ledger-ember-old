import Controller from '@ember/controller';
import {inject} from '@ember/controller';

export default Controller.extend({

  // Inject Payees controller to send action
  payees: inject('payees'),

  //payeeModel: alias('model'),

  actions: {
    createPayee(){
      // Create action in payees controller
      this.get('payees').send('createPayee');
    },

    readPayee(){
      this.get('payees').send('readPayee', this.model);
    },

    updatePayee(){
      // Update action in payees controller
      this.get('payees').send('updatePayee', this.model);
    },
    
    mergePayee(){
      // Merge payee action in payees controller
      this.get('payees').send('mergePayee');
    },

    deletePayee() {
      // Delete payee action in payees controller
      this.get('payees').send('deletePayee', this.model);
    }
  },
  
});
