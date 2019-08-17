import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    updatePayee() {
      let payee = this.model;
      payee.save();
    }
  }

});
