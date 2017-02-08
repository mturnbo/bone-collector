import {Model} from 'backbone';

let ArtistModel = Model.extend({
  defaults: {
    name: '',
    bio: '',
    releases: []
  },

  initialize(options) {
    this.name = options.name ? options.name : '';
    this.bio = options.bio ? options.bio : '';
  }
});

export default ArtistModel;
