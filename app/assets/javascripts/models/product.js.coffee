EmberjsDemo.Product = DS.Model.extend
  name: DS.attr('string')
  price: DS.attr('string')
  category: DS.belongsTo('Category')
  position: DS.attr('number')