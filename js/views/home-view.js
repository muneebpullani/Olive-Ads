var HomeView = Backbone.View.extend({
  el: '#main',
  events:{
    'click button#btn-1': 'loadWorks'
  },
  initialize: function(){
    $.get({
      url: 'templates/home-view.html',
      success: this.loadTemplate,
      context: this,
      dataType: 'html'
    });
  },
  render: function(){
    this.$el.empty().append(this.template({}));
  },
  loadTemplate: function(data){
    this.template= _.template(data);
    this.render();
  },
  loadWorks: function(){
    console.log('loadWorks function start!!!');
    // $('main').empty().append('<h1>Work View loaded</h1>');
  }
});
