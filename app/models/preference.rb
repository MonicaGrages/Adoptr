class Preference < ApplicationRecord
  belongs_to :user
  validates :zip, presence: true
  validates :age, presence: true
  validates :pet_type, presence: true
  validates :size, presence: true
  validates :sex, presence: true
end
