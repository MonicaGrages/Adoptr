class AddPetsViewedToPreference < ActiveRecord::Migration[5.1]
  def change
    add_column :preferences, :pets_viewed, :integer
  end
end
