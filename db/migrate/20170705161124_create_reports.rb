class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.string :city
      t.string :state
      t.integer :temperature
      t.text :conditions

      t.timestamps
    end
  end
end
