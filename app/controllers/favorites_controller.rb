class FavoritesController < ApplicationController
  def index
    @user = User.find(params[:userId])
    @favorites = @user.favorites
    render json: @favorites,
      include: {:pet => {:only => :name}}

  end

  def create
  end

  def delete
  end

  private
  def pet_params
  end
end
