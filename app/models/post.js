import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  body: attr(),
  price: attr(),
  location: attr(),
  image: attr(),
  date: attr(),
  type: attr(),
  category: attr(),
  email: attr()
});
