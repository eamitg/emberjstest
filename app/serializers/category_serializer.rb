class CategorySerializer < ActiveModel::Serializer
	attributes :id, :name, :position

	has_many :products, embed: :ids
end
