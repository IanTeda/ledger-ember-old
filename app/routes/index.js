import Route from '@ember/routing/route';

export default Route.extend({
  // Transition index '/' calls to dashboard
  beforeModel() {
    this.replaceWith('dashboard');
  }
});
