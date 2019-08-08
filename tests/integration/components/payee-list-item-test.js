import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Integration | Component | payee-list-item', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  /**
   * MOCK DATA
   * Test data
   */
  hooks.beforeEach(function () {
    this.payee = {
      id: 54,
      name: 'test-payee',
      primaryCategory: 'test-category',
      website: 'test-payee-website.com'
    };
  });

  /**
   * LIST TEST
   */
  test('should display payee item details', async function(assert) {
    await render(hbs`<PayeeListItem @payee={{this.payee}} />`);
    assert.equal(this.element.querySelector('.payee-list-item-text-name').textContent.trim(), 'test-payee');
    assert.equal(this.element.querySelector('.payee-list-item-text p').textContent.trim(), 'test-payee-website.com');
  });

});

//       id: 1,
//       name: 'Woolworths',
//       primaryCategory: 'Food:Groceries',
//       image: 'https://www.woolworths.com.au/Images/GlobalHeader/icon-header-logo.png',
//       website: 'https://www.woolworths.com.au/',
//       meta: {
//         aliases: [
//           'WOOLWORTHS W1269         ENGADINE',
//           'WOOLWORTHS 1669          SURRY HILLS NSW TAP AND PAY 6541',
//           'WOOLWORTHS W1092         MENAI'
//         ],
//         total: {
//           transactions: 392,
//           expenses: 49843,
//         }
//       }