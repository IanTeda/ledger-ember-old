import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sidenav', function(hooks) {
  setupRenderingTest(hooks);

  test('should renders application title', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Sidenav />`);

    assert.equal(this.element.querySelector('h3').textContent.trim(), "MY LEDGER");
  });
});
