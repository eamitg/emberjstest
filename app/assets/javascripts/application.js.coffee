#= require jquery
#= require jquery_ujs
#= require ember
#= require ember-data
#= require ember-template-compiler
#= require_self
#= require emberjs_demo

window.EmberjsDemo = Ember.Application.create()
EmberjsDemo.ApplicationSerializer = DS.ActiveModelSerializer.extend({
    LOG_ACTIVE_GENERATION: true,
    LOG_VIEW_LOOKUPS: true
});

EmberjsDemo.Store = DS.Store.extend({});