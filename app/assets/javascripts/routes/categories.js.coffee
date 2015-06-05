EmberjsDemo.CategoriesRoute = Ember.Route.extend
  model: ->
    @get('store').findAll('category')