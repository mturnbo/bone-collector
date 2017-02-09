import {Collection} from 'backbone.marionette';
import ReleaseModel from 'components/release/model';

let ReleaseCollection = Collection.extend({
  model: ReleaseModel
});

export default ReleaseCollection;