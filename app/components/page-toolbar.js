import Component from '@ember/component';

export default Component.extend({

  actions: {
    create() {
      alert('Create Toolbar');
    },
  }

});

/**
 * https://stackoverflow.com/questions/26979623/global-crud-ember-js
 */

// export default Component.extend({

//   router: service(),

//   actions: {
//     create() {
//       alert('Create Toolbar');
//     },
//     delete() {

//       alert('Delete Toolbar')
//       // let payee = this.get("model");

//       // payee.deleteRecord();
//       // payee.save();

//       // this.get('router').transitionTo('payees');

//     },
//     merge() {
//       // alert('Merge Toolbar')
//       this.sendAction('mergePayee', this.get('payees.show'));
//     }
//   }

// });