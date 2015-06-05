class ProductsController < ApplicationController
	respond_to :json # default to Active Model Serializers

	def index
		respond_with Product.all, each_serializer: ProductSerializer
	end

	def show
		respond_with Product.find(params[:id])
	end

	def create
		respond_with Product.create(post_params)
	end

	def update
		respond_with Product.update(params[:id], post_params)
	end

	def destroy
		respond_with Product.destroy(params[:id])
	end

	private
		def post_params
			params.require(:product).permit(:name, :category_id, :price, :position) # only allow these for now
		end
end
