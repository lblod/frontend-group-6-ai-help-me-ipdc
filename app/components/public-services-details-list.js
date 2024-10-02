import Component from '@glimmer/component';
// @ts-ignore
import { inject as service } from '@ember/service';
// @ts-ignore
import { action } from '@ember/object';

export default class PublicServicesDetailsListComponent extends Component {
  @service store;

  @action
  handleChange(model) {
    console.log(model);
    model.save();
  }
}
