/**
 * CONFIRM DELETION DIALOG
 * 
 * name:    {STRING} Name of DS record to confirming deletion
 * message: {STRING} Dialog message
 * delete:  {ACTION} closed action
 * 
 * Usage:
 *  
 *    {{#if confirmDeleteDialog}}
 *      {{dialog-confirm-delete name=payee.name message="Please confirm deletion of payee" delete=(action "deletePayee")}}
 *    {{/if}}
 */

import Component from '@ember/component';

export default Component.extend({

  actions: {
    closeDialog(result) {
      // If result (button pressed) is delete
      if (result === 'delete') {
        // Closed dialog
        this.set('confirmDeleteDialog', false);

        // Trigger delete action passed to component 
        this.delete();
      } else {

        // Else just close the dialog
        this.set('confirmDeleteDialog', false);
      }
    },
  }
});
