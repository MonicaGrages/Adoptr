class PassesController < ApplicationController

    def create
    @pass = Pass.new(pass_params)
    if @pass.save
      puts "successful pet pass"
      render json: @pass
    else
      render json: @pass.errors
    end
  end


  private
  def pass_params
    params.require(:pass).permit(:user_id, :pet_id)
  end
end
