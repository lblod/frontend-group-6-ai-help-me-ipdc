import { module, test } from 'qunit';

import { setupTest } from 'frontend-group-6-ai-help-me-ipdc/tests/helpers';

module('Unit | Model | requirement', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('requirement', {});
    assert.ok(model);
  });
});
