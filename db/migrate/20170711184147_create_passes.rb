class CreatePasses < ActiveRecord::Migration[5.1]
  def change
    create_table :passes do |t|
      t.references :user, foreign_key: true
      t.references :pet, foreign_key: true

      t.timestamps
    end
  end
end
