import Component from '@ember/component';
import { A } from '@ember/array';

//TODO: Only show update button when data is dirty

export default Component.extend({

  /**
   * Binding actions from controller
   * https://deprecations.emberjs.com/v3.x/#toc_ember-component-send-action
   */

  actions: {
    // Action defined in component template
    updatePayee(){
      // Action defined in component call (parent)
      this.update()
    },
    mergePayee(){
      this.merge()
    },
    deletePayee(){
      this.delete()
    },
    confirmDeletePayee(event) {
      this.set('dialogOrigin', event.currentTarget);
      this.set('confirmDeleteDialog', true);
    },
  },

  menuItems: A([
    {
      title: 'Merge',
      action: 'mergePayee'
    },
    {
      title: 'Delete',
      action: 'confirmDeletePayee'
    }
  ]),



});