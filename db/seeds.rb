# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

######## Adminstrative Users ##########

joseph = User.create(username: 'joseph', password: 'bear')

######## Available Training Times ###########

early_morning = Availability.create(time: '9:00AM')
morning = Availability.create(time: '11:00AM')
afternoon = Availability.create(time: '1:00PM')
late_afternoon = Availability.create(time: '3:00PM')


####### Training Services ###########

small_group = Service.create(
  title: 'Small Group',
  description: 'Private Training for 2 to 5 people',
  duration: '60 minutes',
  cost: 'to be determined'
)

private = Service.create(
  title: 'Private Training',
  description: 'Individual Training for Adults',
  duration: '60 minutes',
  cost: 'to be determined'
)

children = Service.create(
  title: 'Private Training',
  description: 'Individual Training for kids, duration determined based on age',
  duration: '45 - 60 Minutes',
  cost: 'to be determined'
)

small_group_children = Service.create(
  title: 'Small Group Children',
  description: 'Private Training for 2 - 5 children, duration determined based on age',
  duration: '45 - 60 Minutes',
  cost: 'to be determined'
)

large_group_training = Service.create(
  title: 'Group Training for companies',
  description: 'Private Training for large groups such as corporations, adults, or children, duration based on age and number of people',
  duration: '45 - 90 minutes',
  cost: 'to be determined'
)
