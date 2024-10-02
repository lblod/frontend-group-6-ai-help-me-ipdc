import { module, test } from 'qunit';

import { setupTest } from 'frontend-group-6-ai-help-me-ipdc/tests/helpers';

module('Unit | Adapter | public service', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:public-service');
    assert.ok(adapter);
  });
});
