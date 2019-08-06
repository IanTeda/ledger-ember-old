import { module, test } from "qunit";
import { click, currentURL, visit } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | sidenav", function(hooks) {
  setupApplicationTest(hooks);

  test("/ root should redirect to /dashboard.", async function (assert) {
    await visit("/");
    assert.equal(currentURL(), "/dashboard", "should redirect automatically");
  });

  test("dashboard menu link should link to /dashboard.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-dashboard a");
    assert.equal(currentURL(), "/dashboard", "should navigate to /ledger");
  });

  test("ledger menu link should link to /ledger.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-ledger a");
    assert.equal(currentURL(), "/ledger", "should navigate to /ledger");
  });

  test("budgets menu link should link to /budgets.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-budgets a");
    assert.equal(currentURL(), "/budgets", "should navigate to /budgets");
  });

  test("categories menu link should link to /categories.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-categories a");
    assert.equal(currentURL(), "/categories", "should navigate to /categories");
  });

  test("categories menu link should link to /payees.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-payees a");
    assert.equal(currentURL(), "/payees", "should navigate to /payees");
  });

  test("reports menu link should link to /reports.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-reports a");
    assert.equal(currentURL(), "/reports", "should navigate to /reports");
  });

  test("categories menu link should link to /settings.", async function (assert) {
    await visit("/");
    await click("md-list-item.sidenav-link-settings a");
    assert.equal(currentURL(), "/settings", "should navigate to /settings");
  });

});
