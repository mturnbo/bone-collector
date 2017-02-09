import {Object} from 'backbone.marionette';

let Track = Object.extend({
  defaults: {
    num: 1,
    artist: '',
    title: '',
    trackLength: 0
  },

  initialize(options) {
    this.num = options.num || 1;
    this.artist = options.artist || '';
    this.title = options.title || '';
    this.length = options.trackLength || '';
    console.log('Initialized Track Model');
  }
});

export default Track;
