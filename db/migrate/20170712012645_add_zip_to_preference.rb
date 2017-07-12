class AddZipToPreference < ActiveRecord::Migration[5.1]
  def change
    add_column :preferences, :zip, :string
  end
end
