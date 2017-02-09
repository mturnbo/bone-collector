import {Collection} from 'backbone.marionette';
import TrackModel from 'components/track/model';

let TrackCollection = Collection.extend({
  model: TrackModel
});

export default TrackCollection;