import Model, { attr } from '@ember-data/model';

export default class ProcedureModel extends Model {
  @attr title;
  @attr description;
}
