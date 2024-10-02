import Model, { attr, hasMany } from '@ember-data/model';

export default class PublicServicesModel extends Model {
  @attr title;
  @attr description;
  @hasMany('requirement') requirements;
  @hasMany('procedure') procedures;
  @hasMany('procedure') generatedProcedures;
}
