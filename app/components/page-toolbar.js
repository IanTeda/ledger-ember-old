import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({

  actions: {
    userProfile() {
      alert('User Profile');
    },

    settings(){
      alert('Settings')
    },

    logOut() {
      alert('Log Out')
    },
    toggle(propName) {
      this.toggleProperty(propName);
    }

  },

  toolbarMenu: A([
    {
      title: 'Profile',
      action: 'userProfile',
      isFirst: true
    },
    {
      title: 'Settings',
      action: 'settings'
    },

    {
      title: 'Log Out',
      action: 'logOut'
    }
  ]),


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