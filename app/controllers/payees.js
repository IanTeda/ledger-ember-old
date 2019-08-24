/**
 * PAYEES CONTROLLER
 * Keep the CRUD code in one place
 * TODO: Copy Ghost code layout
 */

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

  /**
   * INJECT PAPER TOAST SERVICE
   * Don't forget to 'import { inject as service } from '@ember/service';'
   * 
   * https://miguelcobain.github.io/ember-paper/#/components/toast
   * https://github.com/miguelcobain/ember-paper/blob/master/tests/dummy/app/controllers/demo/toast.js
   */
  paperToaster: service(),

  /**
   * CONTROLLER ACTIONS
   * What do we need to do between the view and model or between the model and view
   */
  actions: {

    /**
     * CREATE NEW PAYEE RECORD
     * Create a new payee on the api backend
     * 
     * @param {STRING} name 
     * @param {STRING} image 
     * @param {STRING} website 
     * @param {STRING} description 
     */
    createPayee(name, image, website, description){

      // Create payee record in DS
      let newPayee = this.store.createRecord('payee', {
        name: name,
        image: image,
        website: website,
        description: description 

      })

      // Save DS record to API backend
      newPayee.save()
        // Then transition to new payee URL
        .then((payee) => {
          this._transitionToPayee(payee) 
       })
    },

    readPayee(){
      alert('Read Payee')
    },

    /**
     * UPDATE PAYEE
     * Update payee record in API backend
     * 
     * @param {model} payee 
     */
    updatePayee(payee){
      // Save DS model record to API backend
      payee.save()
        // Then celebrate with a toast message
        .then(this._openToast('"' + payee.name +'"' + ' details updated')); //TODO: Do I wait for API confirmation?
    },

    /**
     * DELETE PAYEE
     * Delete payee record from API backend
     * 
     * @param {model} payee 
     */
    deletePayee(payee){
      // Delete payee record from DS
      payee.deleteRecord();
      // Save change to API backend i.e. delete record
      payee.save();
    },

    
    mergePayee(){
      alert('Merge Payee')
    }
  },

  /**
   * TRANSITION TO PAYEE (Private Function)
   * Confirm payee created then transition to payee URL
   * 
   * @param {DS RECORD} payee 
   */
  _transitionToPayee(payee) {
    // Celebrate with a toast message
    this._openToast('"' + payee.name +'"' + ' created');

    // Transition to new payee URL
    this.transitionToRoute("payees.show", payee.id) // TODO: Check out Ghost code for slug service
  },

  /**
   * OPEN TOAST (Private Function)
   * Show toast message
   * 
   * @param {STRING} message 
   */
  _openToast(message) {
    this.get('paperToaster').show(message, {
      duration: 4000,
      toastClass: this.get('toastClass')
    });
  },

});
