import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | payees/payee', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:payees/payee');
    assert.ok(route);
  });
});
