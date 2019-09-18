import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({

  actions: {
    readPayee(){
      this.read();
    },
    mergePayee(){
      this.merge();
    },
    deletePayee(){
      this.delete();
    },
    confirmDeleteDialog(event) {
      this.set('dialogOrigin', event.currentTarget);
      this.set('confirmDeleteDialog', true);
    },
  },


  menuItems: A([
    {
      title: 'Details',
      action: 'readPayee'
    },
    {
      title: 'Merge',
      action: 'mergePayee'
    },
    {
      title: 'Delete',
      action: 'confirmDeleteDialog'
    }
  ]),

  
});
