class Pass < ApplicationRecord
  belongs_to :user
  belongs_to :pet
  validates_uniqueness_of :user_id, :scope => :pet_id

end
