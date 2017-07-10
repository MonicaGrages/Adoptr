class CreatePreferences < ActiveRecord::Migration[5.1]
  def change
    create_table :preferences do |t|
      t.references :user, foreign_key: true
      t.string :type
      t.string :age
      t.string :size
      t.string :sex

      t.timestamps
    end
  end
end
