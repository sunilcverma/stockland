from graphene_django import DjangoObjectType
#from graphene import Node
from pets.models import Category, Pet


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category


class PetType(DjangoObjectType):
    class Meta:
        model = Pet
        #interfaces = (Node,)
        #fields = "__all__"
        #filter_fields = {
        #    'name': ['icontains']
        #}