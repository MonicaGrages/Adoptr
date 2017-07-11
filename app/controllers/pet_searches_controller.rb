class PetSearchesController < ApplicationController
  # before_action :authenticate_user!
  def index
    @search_preferences = User.find(params[:user_id]).preference
    puts @search_preferences["age"]

    @search_query = ""

    unless @search_preferences['age'] == "all"
      @search_query = @search_query + "&age=#{@search_preferences['age']}"
    end

    unless @search_preferences['size'] == "all"
      @search_query = @search_query + "&size=#{@search_preferences['size']}"
    end

    unless @search_preferences['sex'] == "all"
      @search_query = @search_query + "&sex=#{@search_preferences['sex']}"
    end

    unless @search_preferences['pet_type'] == "all"
      @search_query = @search_query + "&animal=#{@search_preferences['pet_type']}"
    end

    puts @search_query

    # search_ = params[:search_query]
    # search_query = "&animal=dog&size=S"
    @pet = Pet.generate @search_query
    render json: @pet
  end
end
