import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    let data = this.modelFor('application');
    return data.recipes.findBy('id', params.recipe_id);
  },

  setupController(controller, model) {
    controller.set('recipe', model)
  }

});
