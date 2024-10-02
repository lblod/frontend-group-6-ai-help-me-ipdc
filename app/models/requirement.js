import Model, { attr } from '@ember-data/model';

export default class RequirementModel extends Model {
  @attr title;
  @attr description;
}
