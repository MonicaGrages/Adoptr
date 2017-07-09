class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :description
      t.string :photo
      t.string :age
      t.string :size
      t.string :sex

      t.timestamps
    end
  end
end
