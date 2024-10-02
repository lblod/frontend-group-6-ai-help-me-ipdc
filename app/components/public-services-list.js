import Component from '@glimmer/component';
// @ts-ignore
import { inject as service } from '@ember/service';
// @ts-ignore
import { action } from '@ember/object';

export default class PublicServicesListComponent extends Component {
  @service store;

  @action
  showService(service) {
    console.log(service.title);
  }
}
