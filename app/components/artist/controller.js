import Component from 'marionette.component';
import ArtistView from 'components/artist/view';
import ArtistModel from 'components/artist/model';

let ArtistComponent = Component.extend({
  viewClass: ArtistView,

  initialize(options) {
    this.model = new ArtistModel(options);
  }
});

export default ArtistComponent;
