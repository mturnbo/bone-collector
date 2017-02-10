import Marionette from 'backbone.marionette';
import Artist from 'components/artist';

export default Marionette.Application.extend({
  regions: {
    main: '#app'
  },

  onStart() {
    let artist = new Artist({
      name: 'Prince',
      bio: 'Few artists have created a body of work as rich and varied as Prince. During the 80s, he emerged as one of the most singular talents of the rock & roll era, capable of seamlessly tying together pop, funk, folk, and rock.'
    });

    artist.showIn(this.main);
  }
});
