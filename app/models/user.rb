class User < ActiveRecord::Base
  has_many :pets, through: :favorites
  has_many :favorites, dependent: :destroy
  has_many :passes, dependent: :destroy
  has_one :preference, dependent: :destroy
  validates :email, presence: true, length: {maximum: 255}
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  before_save -> do
    # self.uid = SecureRandom.uuid
    skip_confirmation!
  end

  after_create -> do
    create_preference(pet_type: "all", zip: "ex: 30309", age: "all", sex: "all", size: "all", pets_viewed: 0)
  end

  # before_action :configure_permitted_parameters, if: :devise_controller?

  private
  # devise_parameter_sanitizer.require(:user).permit(:confirm_success_url, :config_name, :registration)


end
