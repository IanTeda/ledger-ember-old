import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ledger', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ledger');
    assert.ok(route);
  });
});
