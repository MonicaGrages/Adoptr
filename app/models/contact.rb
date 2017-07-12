class Contact < ApplicationRecord
  belongs_to :pet
  validates :pet_id, uniqueness: true
end
