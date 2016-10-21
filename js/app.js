var MainView = Backbone.View.extend({
  el: 'div',
  initialize: function() {
    $.get({
      url: 'templates/main-view.html',
      success: this.loadTemplate,
      context: this,
      dataType: 'html'
    });
    var homeView = new HomeView();

  },
  render: function(){
    $('body').append(this.template({}));
  },
  loadTemplate: function(data) {
    this.template = _.template(data);
    this.render();
  }
});
var mainView = new MainView();
