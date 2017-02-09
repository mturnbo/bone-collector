import Component from 'marionette.component';
import ArtistModel from 'components/artist/model';
import ArtistView from 'components/artist/view';

let ArtistComponent = Component.extend({
  viewClass: ArtistView,

  initialize(options) {
    this.model = new ArtistModel(options);
  }
});

export default ArtistComponent;
