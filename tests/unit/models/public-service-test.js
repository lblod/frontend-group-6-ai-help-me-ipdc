import { module, test } from 'qunit';

import { setupTest } from 'frontend-group-6-ai-help-me-ipdc/tests/helpers';

module('Unit | Model | public service', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('public-service', {});
    assert.ok(model);
  });
});
