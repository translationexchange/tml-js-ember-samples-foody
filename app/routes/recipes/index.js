import Ember from 'ember';

const {RSVP} = Ember;

export default Ember.Route.extend({

  afterModel(){
    return this.get('tml').setSource(this.get('routeName'));
  },

  setupController(controller, model) {
    let recipes = {}
    model.categories.forEach((cat) => {
      recipes[cat.id] = model.recipes.filterBy('category',cat.id)
    });

    controller.set('categories', model.categories);
    controller.set('recipes', recipes);
  }

});
