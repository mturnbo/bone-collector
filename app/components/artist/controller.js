import Component from 'marionette.component';
import View from './view';
import Model from './model';

export default Component.extend({
  viewClass: View,

  initialize(options) {
    this.model = new Model(options);
  }
});
