class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.belongs_to :category, index: true, foreign_key: true
      t.string :position

      t.timestamps null: false
    end
  end
end
