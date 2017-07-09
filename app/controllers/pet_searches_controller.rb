class PetSearchesController < ApplicationController
  def index
    @pet = Pet.generate
  end
end
