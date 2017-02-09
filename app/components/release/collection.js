import {Collection} from 'backbone.marionette';
import ReleaseModel from './model';

let ReleaseCollection = Collection.extend({
  model: ReleaseModel
});

export default ReleaseCollection;