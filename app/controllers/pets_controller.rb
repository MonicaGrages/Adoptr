class PetsController < ApplicationController

  def index
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet,
      include: [:favorites, :passes, :contact]
  end
end
