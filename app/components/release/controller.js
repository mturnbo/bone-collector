import Component from 'marionette.component';
import ReleaseModel from 'components/release/model';
import ReleaseView from 'components/release/view';

let ReleaseComponent = Component.extend({
  viewClass: ReleaseView,

  initialize(options) {
    this.model = new ReleaseModel(options);
  }
});

export default ReleaseComponent;
