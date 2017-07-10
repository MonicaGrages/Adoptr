class Pet < ApplicationRecord
  has_many :users, through: :favorites
  has_many :favorites
  include HTTParty
  base_uri 'http://api.petfinder.com/pet.getRandom?key=1219862dd4ec54515c6b83ea07c325ca&format=json&output=full'

  def self.generate
    response = get("")
    pet = response['petfinder']['pet']
    existing_pet = find_by(petfinder_id: pet['id']['$t'])
    return existing_pet unless existing_pet.nil?

    # new_pet will be returned unless there is an existing pet with the same
    # id already in the db
    new_pet = create(name: pet['name']['$t'],
           photo: pet['media']['photos']['photo'][3]['$t'],
           description: pet['description']['$t'],
           sex: pet['sex']['$t'],
           age: pet['age']['$t'],
           size: pet['size']['$t'],
           petfinder_id: pet['id']['$t'])

  end

end
