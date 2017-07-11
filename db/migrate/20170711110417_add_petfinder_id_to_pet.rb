class AddPetfinderIdToPet < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :petfinder_id, :string
  end
end
