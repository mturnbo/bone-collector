import ItemView from 'backbone.marionette';
import ReleaseTemplate from './template.hbs';

let ReleaseView = ItemView.extend({
  template: ReleaseTemplate
});

export default ReleaseView;