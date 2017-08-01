import Ember from 'ember';

const {RSVP} = Ember;

export default Ember.Route.extend({

  afterModel(){
    return this.get('tml').setSource(this.get('routeName'));
  }

});
