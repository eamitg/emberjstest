EmberjsDemo.EditCategoryView = Ember.TextField.extend({
	didInsertelement: function() {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-category', EmberjsDemo.EditCategoryView);