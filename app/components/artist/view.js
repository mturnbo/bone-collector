import {ItemView} from 'backbone.marionette';
import ArtistTemplate from 'components/artist/template';

let ArtistView = ItemView.extend({
  template: ArtistTemplate
});

export default ArtistView;
