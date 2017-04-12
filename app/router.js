import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes', {path: '/'});
  this.route('recipe', {path: 'recipe/:recipe_id'});  
});

export default Router;
