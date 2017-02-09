import ItemView from 'backbone.marionette';
import ReleaseTemplate from 'components/release/template';

let ReleaseView = ItemView.extend({
  template: ReleaseTemplate
});

export default ReleaseView;