import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-up');
  this.route('sign-in');
  this.route('create-post');
  this.route('post', {path: 'post/:post_id'});
  this.route('about');
});

export default Router;
