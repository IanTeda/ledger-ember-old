import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'ledger/api'
});
