import {Object} from 'backbone.marionette';

let Release = Object.extend({
  defaults: {
    title: '',
    year: 0
  },

  initialize(options) {
    this.title = options.title || '';
    this.title = options.title || '';
    console.log('Initialized Release Model');
  }
});

export default Release;
