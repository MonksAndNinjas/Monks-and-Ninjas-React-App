class CreateClientInfo < ActiveRecord::Migration[5.2]
  def change
    create_table :client_infos do |t|
      t.string :name
      t.string :phone
      t.string :email
    end
  end
end
