class AddClientInfoIdToReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :client_info_id, :integer
  end
end
