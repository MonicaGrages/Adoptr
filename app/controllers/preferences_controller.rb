class PreferencesController < ApplicationController

  def update
    @preference = Preference.find_by(user_id: params[:user_id])
    if @preference.update(preference_params)
      render json: @preference
    else
      render status: 500,
        json: {error: @preference.errors}
    end
  end

  def increment_pet_views
    @preference = Preference.find_by(user_id: params[:user_id])
    @incremented_pets_viewed = @preference[:pets_viewed] + 1
    if @preference.update({pets_viewed: @incremented_pets_viewed})
      render json: @preference
    else
      render status: 500,
        json: {error: @preference.errors}
    end
  end


private
def preference_params
  params.require(:preference).permit(:pet_type, :age, :size, :sex)
end

end
