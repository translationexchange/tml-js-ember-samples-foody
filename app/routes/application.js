import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(){
    return this.get('tml').initialize();
  },


  model(){
    return Ember.$.getJSON('/api/data.json');
  }

});
