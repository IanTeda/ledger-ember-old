import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | page-toolbar", function(hooks) {
  setupRenderingTest(hooks);

  test("should render page title", async function(assert) {
    this.set("dummyTitle", "Dummy Title");
    await render(hbs`{{page-toolbar pageTitle=dummyTitle}}`);
    assert.equal(this.element.querySelector(".page-toolbar-title").textContent.trim(), "Dummy Title");
  });
});
