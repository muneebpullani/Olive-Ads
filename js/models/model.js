var Menu = Backbone.Model.extend({
  defaults: {
    menu1: 'Home',
    menu2: 'About',
    menu3: 'Contact',
    currentMenu: 0,
    selected: 'x'
  },
  initialize: function(){
    console.log('model initialized!!');
    this.on('change:selected', function(){
      console.log('change detected!!');
    });
  }
});
var menu = new Menu();
