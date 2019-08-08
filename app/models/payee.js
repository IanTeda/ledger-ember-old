import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  number: DS.attr('number'),
  name: DS.attr('string'),
  website: DS.attr('string')
});

// {
//   type: "payees",
//   id: "1",
//   attributes: {
//     name: "Woolworths",
//     primaryCategory: "Food:Groceries",
//     image: "https://www.woolworths.com.au/Images/GlobalHeader/icon-header-logo.png",
//     website: "https://www.woolworths.com.au/",
//   }
// }
