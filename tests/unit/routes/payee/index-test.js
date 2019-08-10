import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | payee/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:payee/index');
    assert.ok(route);
  });
});
