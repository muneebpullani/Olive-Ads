var ContactView = Backbone.View.extend({
	el: '#foo',
	initialize: function() {
		_.bindAll(this, 'render', 'loadTemplate');
		$.get({
			url: '../templates/contact-view.html',
			success: this.loadTemplate,
			context: this,
			dataType: 'html'
		});
	},
	render: function() {
		this.$el.empty().append(this.template({})).hide().fadeIn();
		return this;
	},
	loadTemplate: function(data) {
		this.template = _.template(data, {});
		this.render();
	}
});
