class CategoriesController < ApplicationController
	respond_to :json # default to Active Model Serializers
	
	def index
		respond_with  Category.all, each_serializer: CategorySerializer
		#render :json =>
			#{
				#:categories => ActiveModel::ArraySerializer.new(Category.all, each_serializer: CategorySerializer),
		#		:products => ActiveModel::ArraySerializer.new(Product.all, each_serializer: ProductSerializer)
		#	}
	end

	def show
		respond_with Category.find(params[:id])
	end

	def create
		respond_with Category.create(post_params)
	end

	def update
		respond_with Category.update(params[:id], post_params)
	end

	def destroy
		respond_with Category.destroy(params[:id])
	end

	private
		def post_params
			params.require(:category).permit(:name, :position) # only allow these for now
		end
end
