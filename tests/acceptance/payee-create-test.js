import { module, test } from 'qunit';
import { visit, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | payee create', function(hooks) {
  setupApplicationTest(hooks);

  test('should create new payee', async function(assert) {
    // Goto create payee URL
    await visit('/payees/create');

    // Fill in form
    await fillIn('input.payee-name', 'Payee Name');
    await fillIn('input.payee-image', 'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg');
    await fillIn('input.payee-website', 'https://larry.com');
    await fillIn('input.payee-description', 'A description of the payee');

    // Submit form
    await click('button.payee-create');

    // Submit form and check output
    const title = this.element.querySelector('input.payee-name').textContent;
    assert.equal(title, 'Payee Name');
  });
});
