class PetSearchesController < ApplicationController
  # before_action :authenticate_user!
  def index
    @pet = Pet.generate
    render json: @pet
  end
end
