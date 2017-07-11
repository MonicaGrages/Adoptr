class RemovePetfinderIdFromPet < ActiveRecord::Migration[5.1]
  def change
    remove_column :pets, :petfinder_id
  end
end
