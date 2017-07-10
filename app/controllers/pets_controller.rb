class PetsController < ApplicationController

  def index
  end

  def show
    @pet = Pet.find(params[:id])
    render json: @pet,
      include: {:favorites => {:only => [:id, :user_id, :created_at]}}
  end
end
