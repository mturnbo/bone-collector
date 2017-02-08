import {Collection} from 'backbone';
import LocalStorage from 'backbone-localstorage';
import ArtistModel from 'components/artist/model';

let ArtistCollection = Collection.extend({
  model: ArtistModel,
  localStorage: new LocalStorage('artists-bone-collector')
});

export default ArtistCollection;
