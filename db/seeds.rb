# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

######## Available Training Times ###########

early_morning = Availability.create(time: '9:00AM')
morning = Availability.create(time: '11:00AM')
afternoon = Availability.create(time: '1:00PM')
late_afternoon = Availability.create(time: '3:00PM')


####### Training Services ###########

s
