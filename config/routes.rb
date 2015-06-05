Rails.application.routes.draw do

	get 'home/index'

	resources :categories
	resources :products
	root 'home#index'
end
