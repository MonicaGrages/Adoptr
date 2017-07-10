class PetSearchesController < ApplicationController
  # before_action :authenticate_user!
  def index
    @pet = Pet.generate
    puts "@pet is: "
    puts @pet
    render json: @pet
  end
end
