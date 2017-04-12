import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    let recipes = {}
    model.categories.forEach((cat) => {
      recipes[cat.id] = model.recipes.filterBy('category',cat.id)
    });

    controller.set('categories', model.categories);
    controller.set('recipes', recipes);
  }

});
