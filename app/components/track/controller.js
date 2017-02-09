import Component from 'marionette.component';
import TrackModel from 'components/track/model';
import TrackView from 'components/track/view';

let TrackComponent = Component.extend({
  viewClass: TrackView,

  initialize(options) {
    this.model = new TrackModel(options);
  }
});

export default TrackComponent;
