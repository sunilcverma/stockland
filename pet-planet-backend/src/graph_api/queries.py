from graphene import ObjectType
from graphene import List
from pets.models import Pet
from graph_api.types import PetType
from graph_api.arguments import PetFilter

class Queries(ObjectType):
    pets = List(PetType, filter=PetFilter(required=False))

    def resolve_pets(root, info, filter={}):
        pets = list(Pet.objects.all())

        if filter.get("name"):
            pets = [pet for pet in pets if pet.name == filter["name"]]

        if filter.get("category"):
            pets = [pet for pet in pets if int(pet.category.id) == int(filter["category"])]

        return pets