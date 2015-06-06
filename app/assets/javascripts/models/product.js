EmberjsDemo.Product = DS.Model.extend({
	name: DS.attr('string'),
	price: DS.attr('string'),
	position: DS.attr('number'),
	category: DS.belongsTo('category')
});