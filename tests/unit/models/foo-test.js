import { module, test } from 'qunit';
import { setupTest } from 'example/tests/helpers';

module('Unit | Model | foo', function (hooks) {
  setupTest(hooks);

  // passes in v3, fails in v4
  test('rollback unloads from store', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('foo', {});
    assert.deepEqual(store.peekAll('foo').slice(), [model]);
    model.rollbackAttributes();
    assert.deepEqual(store.peekAll('foo').slice(), []);
  });
});
