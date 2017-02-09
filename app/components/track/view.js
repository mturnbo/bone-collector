import ItemView from 'backbone.marionette';
import TrackTemplate from 'components/track/template';

let TrackView = ItemView.extend({
  template: TrackTemplate
});

export default TrackView;