class FavoritesController < ApplicationController
  def index
    @user = User.find(params[:userId])
    @favorites = @user.favorites
    render json: @favorites,
      include: {:pet => {:only => :name}}

  end

  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors
    end
  end

  def delete
  end

  private
  def pet_params
  end
  def favorite_params
    params.require(:favorite).permit(:user_id, :pet_id)
  end
end
