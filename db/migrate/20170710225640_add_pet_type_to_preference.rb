class AddPetTypeToPreference < ActiveRecord::Migration[5.1]
  def change
    add_column :preferences, :pet_type, :string
  end
end
