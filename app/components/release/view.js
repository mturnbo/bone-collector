import {LayoutView} from 'backbone.marionette';
import ReleaseTemplate from 'components/release/template';

let ReleaseView = LayoutView.extend({
  template: ReleaseTemplate
});

export default ReleaseView;