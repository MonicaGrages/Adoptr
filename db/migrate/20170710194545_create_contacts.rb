class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.references :pet, foreign_key: true
      t.string :phone
      t.string :state
      t.string :email
      t.string :city
      t.string :zip

      t.timestamps
    end
  end
end
