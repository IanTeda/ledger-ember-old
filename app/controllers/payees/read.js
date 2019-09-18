/**
 * READ PAYEE
 * CRUD updates done in payees controller.
 * Point actions back to payees controller
 */
import Controller from '@ember/controller';
import {inject} from '@ember/controller';

export default Controller.extend({

    // Inject Payees controller to send action
    payees: inject('payees'),

    actions: {
      createPayee(){
        // Create action in payees controller
        this.get('payees').send('createPayee');
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
