//EmberjsDemo.store.adapter.serializer.map('EmberjsDemo.Category', {
//   comments: {embedded: 'load'}
//});
EmberjsDemo.Category = DS.Model.extend({
	name: DS.attr('string'),
	position: DS.attr('number'),
	products: DS.hasMany('product', {
		embedded: true
	})
});