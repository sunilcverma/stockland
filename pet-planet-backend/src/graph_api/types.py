from graphene_django import DjangoObjectType
from pets.models import Category, Pet


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category


class PetType(DjangoObjectType):
    class Meta:
        model = Pet