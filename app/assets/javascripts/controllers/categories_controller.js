EmberjsDemo.CategoriesController = Ember.ArrayController.extend({
	actions: {
		createCategory: function() {
			var name = this.get('newCategory');
			if (!name.trim()) return;

			var category = this.store.createRecord(EmberjsDemo.Category, {
				name: name,
				position: 1
			});

			this.set('newCategory', '');

			category.save();
		},
		createCategoryProduct: function() {
			var name = this.get('newProductName');
			var price = this.get('newProductPrice');
			var cat_id = $('#new-product-category_id').val();
			if (!name.trim()) return;
			alert('Name empty');
			var product = this.store.createRecord(EmberjsDemo.Product, {
				name: name,
				price: price,
				category_id: cat_id,
				position: 1
			});

			//this.set('newProductName', '');
			//this.set('newProductPrice', '');

			//product.save();
		}
	}
});