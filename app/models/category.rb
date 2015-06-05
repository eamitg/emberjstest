class Category < ActiveRecord::Base
	validates_presence_of :name, :position

	has_many :products
end
