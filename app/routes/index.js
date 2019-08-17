import Route from '@ember/routing/route';

export default Route.extend({
  // Transition to index '/' calls to dashboard
  beforeModel() {
    this.replaceWith('dashboard');
  }
});
