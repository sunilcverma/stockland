from graphene import ObjectType
from graphene import List
from pets.models import Pet
from graph_api.types import PetType
from graph_api.arguments import PetFilter
from  graph_api.utilities import Utility
class Queries(ObjectType):
    pets = List(PetType, filter=PetFilter(required=False))

    def resolve_pets(root, info, filter={}):
        pets = list(Pet.objects.all())

        if filter.get("name"):
           # Changing query search for substring and be case insensitive
           pets = [pet for pet in pets if (filter["name"].casefold()) in (pet.name.casefold())]
        
        # age based on year of birth match
        #if filter.get("age"):
        #    pets = [pet for pet in pets if (Utility.calculate_dob_year(filter["age"])  == (pet.dob.year) )]
       
        # presice age match    
        if filter.get("age"):
            pets = [pet for pet in pets if (Utility.calculate_age_from_dob(pet.dob) == (filter["age"]) )]        

        if filter.get("category"):
            pets = [pet for pet in pets if int(pet.category.id) == int(filter["category"])]

        return pets
    
