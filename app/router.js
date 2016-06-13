import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-post-form');
  this.route('update', {path: '/update/:post_id'});
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
