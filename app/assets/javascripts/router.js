EmberjsDemo.Router.map(function() {
	this.resource('categories', { path: '/' }, function() {
		// additional child routes
		//this.route('active');
		//this.route('completed');
	});
	this.resource('products');
});

EmberjsDemo.CategoriesRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('category');
	}
});

EmberjsDemo.CategoriesIndexRoute = Ember.Route.extend({
	model: function(){
		return this.modelFor('categories');
	}
});

EmberjsDemo.CategoriesNewRoute = EmberjsDemo.CategoriesRoute.extend({
    model: function(){
        EmberjsDemo.Category.createRecord();
    }
});

EmberjsDemo.ProductsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('product');
	}
});

EmberjsDemo.ProductsNewRoute = EmberjsDemo.ProductsRoute.extend({
    model: function(){
        EmberjsDemo.Product.createRecord();
    }
});