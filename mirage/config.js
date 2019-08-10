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
   */
  this.get('/payees');
  this.get('/payees/:id');
  this.post('/payees');
  this.patch('/payees/:id');
  this.del('/payees/:id');

}
