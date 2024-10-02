import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-group-6-ai-help-me-ipdc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | public-services-details-list',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<PublicServicesDetailsList />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <PublicServicesDetailsList>
        template block text
      </PublicServicesDetailsList>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
