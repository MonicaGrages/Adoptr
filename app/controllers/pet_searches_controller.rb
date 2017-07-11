class PetSearchesController < ApplicationController
  # before_action :authenticate_user!
  def index
    @search_preferences = User.find(params[:user_id]).preference
    puts @search_preferences["age"]

    @search_query = ""

    if @search_preferences['age']
      @search_query = @search_query + "&age=#{@search_preferences['age']}"
    end

    if @search_preferences['size']
      @search_query = @search_query + "&size=#{@search_preferences['size']}"
    end

    if @search_preferences['sex']
      @search_query = @search_query + "&sex=#{@search_preferences['sex']}"
    end

    if @search_preferences['pet_type']
      @search_query = @search_query + "&animal=#{@search_preferences['pet_type']}"
    end

    puts @search_query

    # search_ = params[:search_query]
    # search_query = "&animal=dog&size=S"
    @pet = Pet.generate @search_query
    render json: @pet
  end
end
