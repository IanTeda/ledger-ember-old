import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  number: DS.attr('number'), // Ledger Payee number for reference
  name: DS.attr('string'), // Payee name
  image: DS.attr('string'), // Image associated with payee. TODO: do data blob?
  website: DS.attr('string'), // Payee Website for reference
  transactions: DS.attr('number'), // How many ledger transactions associated with payee
  description: DS.attr('string'), // What is the Payee about
  spend: DS.attr('number'), // How much money has been spent with payee
  aliases: DS.hasMany('alias'),
  //TODO: Notes database table
});

// https://davidtang.io/2019/08/02/handling-foreign-key-attributes-in-an-api-with-ember-data.html