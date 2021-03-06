class PetSearchesController < ApplicationController
  # before_action :authenticate_user!
  def index
    @user = User.find(params[:user_id])
    @search_preferences = @user.preference

    @search_query = ""

    unless @search_preferences['zip'] == nil
      @search_query = @search_query + "&location=#{@search_preferences['zip']}"
    end

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

    @search_query = @search_query + "&offset=#{@search_preferences['pets_viewed']}"
    puts @search_query

    @pet = Pet.generate(@user.id, @search_query)
    render json: @pet
  end
end
