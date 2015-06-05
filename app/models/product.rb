class Product < ActiveRecord::Base
	validates_presence_of :category, :name, :price, :position
	
	belongs_to :category
end
