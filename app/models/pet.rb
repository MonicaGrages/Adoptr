class Pet < ApplicationRecord
  has_many :users, through: :favorites
  has_many :favorites, dependent: :destroy
  has_many :passes, dependent: :destroy
  has_one :contact, dependent: :destroy
  validates :petfinder_id, uniqueness: true
  include HTTParty
  base_uri 'http://api.petfinder.com/pet.find?key=1219862dd4ec54515c6b83ea07c325ca&format=json&output=full&location=30309&count=1'


  def self.generate (user_id, search_query)
    pets_viewed = (Preference.find_by(user_id: user_id)).pets_viewed
    puts "this user has viewed #{pets_viewed} pets"
    response = get("#{search_query}&offset=#{pets_viewed}")
    pet = response['petfinder']['pets']['pet']
    puts "pet is"
    puts pet
    existing_pet = find_by(petfinder_id: pet['id']['$t'])
    # first check to see if this is a pet that we already have in our database so we don't make another one
    # then check to see if this is a pet that the user has already passed on

    if existing_pet
      if Pass.where("user_id = ? AND pet_id = ?", user_id, existing_pet.id)
        # puts "you already passed on this pet. lastoffset is:"
        # lastOffset =  (response['petfinder']['lastOffset']['$t']).to_i
        # puts lastOffset
        # offset = lastOffset + 1
        # puts offset
        # next_response = get("&offset=#{offset}")
        next_response = get("#{search_query}&offset=#{pets_viewed+1}")
        pet = next_response['petfinder']['pets']['pet']
        puts "pet was already passed on. next pet is "
        puts pet
      else
        return existing_pet
      end
    end

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
