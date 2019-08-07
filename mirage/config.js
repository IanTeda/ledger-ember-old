export default function() {

  this.namespace = 'ledger/api';

  this.get('/payees', function() {
    return {
      data: [{
        id: 1,
        name: 'Woolworths',
        primaryCategory: 'Food:Groceries',
        image: 'https://www.woolworths.com.au/Images/GlobalHeader/icon-header-logo.png',
        website: 'https://www.woolworths.com.au/',
        meta: {
          aliases: [
            'WOOLWORTHS W1269         ENGADINE',
            'WOOLWORTHS 1669          SURRY HILLS NSW TAP AND PAY 6541',
            'WOOLWORTHS W1092         MENAI'
          ],
          total: {
            transactions: 392,
            expenses: 49843,
          }
        }
      },{
        id: 2,
        name: 'BP',
        primaryCategory: 'Transport:Fuel',
        image: 'https://www.bp.com/etc/designs/refresh/bp/images/navigation/bp-logo.svg',
        website: 'https://www.bp.com/',
        meta: {
          aliases: [
            'BP LOFTUS 0899           LOFTUS      NSW',
            'BP 2GO ENGADINE9508      ENGADINE    NSW'
          ],
          total: {
            transactions: 34,
            expenses: 10384,
          }
        }
      },{
        id: 3,
        name: 'Amazon',
        primaryCategory: 'Entertainement:Books',
        image: 'https://webbygram.com/wp-content/uploads/2017/05/Amazon-Logo-720x720.png',
        website: 'https://www.amazon.com.au',
        meta: {
          aliases: [
            'Amazon Australia Servi   MELBOURNE   AUS',
            'AMAZON MKTPLC AU         SYDNEY SOUTHNSW'
          ],
          total: {
            transactions: 3,
            expenses: 4950,
          }
        }
      }]
    }
  }


  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
