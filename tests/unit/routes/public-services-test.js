import { module, test } from 'qunit';
import { setupTest } from 'frontend-group-6-ai-help-me-ipdc/tests/helpers';

module('Unit | Route | public-services', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:public-services');
    assert.ok(route);
  });
});
