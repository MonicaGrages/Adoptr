class PetSearchesController < ApplicationController
  def index
    @pet = Pet.generate
    render json: @pet
  end
end
