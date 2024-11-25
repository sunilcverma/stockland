from graphene import ObjectType
from graphene import Mutation
from graphene import ID
from graphene import String
from graphene import Boolean

from pets.models import Pet


class UpdatePet(Mutation):
    class Arguments:
        id = ID(required=True)
        name = String(required=False)
        available = Boolean(required=False)
        category = ID(required=False)

    success = Boolean()

    def mutate(self, info, id, name, available):
        pet = Pet.objects.get(id=id)
        pet.name = name
        
        #pet.save()
        #return UpdatePet(success=True)

        #update only is the pet is avaliable
        if(pet.available != True):
            return UpdatePet(success=False)
        else:
            pet.available = available   
            pet.save()
            return UpdatePet(success=True)


class Mutations(ObjectType):
    update_pet = UpdatePet.Field()