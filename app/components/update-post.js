import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        title: this.get('tile'),
        body: this.get('body'),
        price: this.get('price'),
        location: this.get('location'),
        image: this.get('image'),
        date: this.get('date'),
        type: this.get('type'),
        category: this.get('category'),
        email: this.get('email')
      };
      this.sendAction('update', post, params);
    }
  }
});
