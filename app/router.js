import EmberRouter from '@ember/routing/router';
import config from 'frontend-group-6-ai-help-me-ipdc/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('public-service');
});
