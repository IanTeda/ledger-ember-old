/**
 * MIRAGE ENDPOINT CONFIG
 * https://jsonapi.org/
 * https://www.ember-cli-mirage.com/docs/getting-started/overview
 */

export default function() {

  this.namespace = "ledger/api";

  /**
   * PAYEES ENDPOINTS
   * Using factory schema to generate development/test data with faker
   * Mirage resource shortcut https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
   * 
   * Action   |  Shorthand
   * ------------------------------
   * index    | this.get('/payees')
   * create   | this.post('/payees')
   * read     | this.get('/payees/:id')
   * update   | this.patch('payees/:id') (or this.put)
   * delete   | this.del('/payees/:id')
   */
  this.resource('payees');
}
