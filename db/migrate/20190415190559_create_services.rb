class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :title
      t.string :description
      t.string :duration
      t.string :cost
    end
  end
end
