from graphene import InputObjectType
from graphene import String
from graphene import ID


class PetFilter(InputObjectType):
    name = String(required=False)
    category = ID(required=False)