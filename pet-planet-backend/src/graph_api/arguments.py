from graphene import InputObjectType
from graphene import String
from graphene import ID
from graphene import Int


class PetFilter(InputObjectType):
    name = String(required=False)
    # filter to the pets query to filter by age
    age = Int(required=False)
    category = ID(required=False)