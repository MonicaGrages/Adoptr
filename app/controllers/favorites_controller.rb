class FavoritesController < ApplicationController
  def index
    @user = User.find(params[:userId])
    @favorites = @user.favorites
    render json: @favorites,
      include: {:pet => {:only => [:name, :photo]}}
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
    @favorite = Favorite.find(params[:id])
    if @favorite.delete
      render json: {message: "successfully deleted favorite"}
    else
      render status: 500,
        json: {error: "error deleting favorite"}
    end
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :pet_id)
  end
end
