class AddLastUpdateToPet < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :last_update, :string
  end
end
