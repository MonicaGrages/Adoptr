class PetsController < ApplicationController

  def index
  end

  def show
    @pet = Pet.find(params[:id])
  end
end
