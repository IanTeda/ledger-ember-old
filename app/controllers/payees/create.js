import Controller from '@ember/controller';

export default Controller.extend({

  // Alias the model so templates are easier to read
  // payees: alias('model'),

  actions: {
    createPayee() {

      let self = this

      let payee = self.store.createRecord('payee', {
        name: self.name,
        image: self.image,
        website: self.website,
        description: self.description 
      })

      payee.save()
        .then((payee) => {
          self.transitionToRoute("payees.show", payee.id)
       })

    }
  }

});
