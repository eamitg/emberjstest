EmberjsDemo.CategoryController = Ember.ObjectController.extend({
	actions: {
		editCategory: function() {
			this.set('isEditing', true);
		},
		acceptChanges: function() {
			this.set('isEditing', false);
			var model = this.get('model');
      			if (model.get('isSaving')) { return }
			if (Ember.isEmpty(this.get('model.name'))) {
				this.send('removeCategory');
			} else {
				this.get('model').save();
			}
		},
		removeCategory: function() {
			var category = this.get('model');
			category.deleteRecord();
			category.save();
		},
		toggle: function() {
			if (this.get('isShowingProducts')){
				this.set('isShowingProducts', false);
			} else {
				this.set('isShowingProducts', true);
			}
		}
	},
	isEditing: false,
	isShowingProducts: false,
	isListItem: "list-group-item"
});