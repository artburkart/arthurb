import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tldr');
  this.route('academics');
  this.route('work');
  this.route('projects');
  this.route('me');
});

export default Router;
