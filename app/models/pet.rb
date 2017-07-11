class Pet < ApplicationRecord
  has_many :users, through: :favorites
  has_many :favorites, dependent: :destroy
  has_many :passes, dependent: :destroy
  has_one :contact, dependent: :destroy
  include HTTParty
  base_uri 'http://api.petfinder.com/pet.getRandom?key=1219862dd4ec54515c6b83ea07c325ca&format=json&output=full'


  def self.generate (user_id, search_query)
    puts "user id is: "
    puts user_id
    puts "search_query is"
    puts search_query
    response = get("#{search_query}")
    pet = response['petfinder']['pet']
    existing_pet = find_by(petfinder_id: pet['id']['$t'])
    # first check to see if this is a pet that we already have in our database so we don't make another one
    # then check to see if this is a pet that the user has already passed on
    return existing_pet unless existing_pet.nil? || Pass.where("user_id = ? AND pet_id = ?", params[:user_id], existing_pet.id)


    # new_pet will be returned unless there is an existing pet with the same
    # id already in the db
    new_pet = create(name: pet['name']['$t'],
      pet_type: pet['animal']['$t'],
      photo: pet['media']['photos']['photo'][3]['$t'],
      description: pet['description']['$t'],
      sex: pet['sex']['$t'],
      age: pet['age']['$t'],
      size: pet['size']['$t'],
      petfinder_id: pet['id']['$t'],
      last_update: pet['lastUpdate']['$t'])

    pet_contact = new_pet.create_contact(phone: pet['contact']['phone']['$t'],
      state: pet['contact']['state']['$t'],
      email: pet['contact']['email']['$t'],
      city: pet['contact']['city']['$t'],
      zip: pet['contact']['zip']['$t'])

    return new_pet
  end

end
