class ClientInfo < ApplicationRecord
  has_many :reservations
end

# add necessary information name, phone, email (not blank)
# email needs to be of valid type, and unique
# phone number needs to be of valid type
# add ability to add notes, and type of services.
# look into params_requiere
