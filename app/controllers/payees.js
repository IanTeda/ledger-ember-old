/**
 * PAYEES CONTROLLER
 * Keep the CRUD code in one place
 * TODO: Copy Ghost code layout
 */

import Controller from '@ember/controller';

export default Controller.extend({

  // Alias the model so templates are easier to read
  // payees: alias('model'),

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
          this.transitionToRoute("payees.show", payee.id) // TODO: Check out Ghost code for slug service
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
      payee.save();
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

});
