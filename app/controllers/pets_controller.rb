class PetsController < ApplicationController

  def index
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet
  end
end
