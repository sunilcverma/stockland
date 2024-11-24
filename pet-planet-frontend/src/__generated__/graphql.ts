/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Top-level mutation object for gql endpoint */
export type Mutation = {
  __typename?: 'Mutation';
  updatePet?: Maybe<UpdatePet>;
};


/** Top-level mutation object for gql endpoint */
export type MutationUpdatePetArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  available?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['Int']['input']>;
};

export type PetType = {
  __typename?: 'PetType';
  age: Scalars['Int']['output'];
  available: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: UserType;
};

/** Top-level query object for gql endpoint */
export type Query = {
  __typename?: 'Query';
  pets?: Maybe<Array<Maybe<PetType>>>;
};

export type UpdatePet = {
  __typename?: 'UpdatePet';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Get_PetsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_PetsQuery = { __typename?: 'Query', pets?: Array<{ __typename?: 'PetType', name: string, id: string } | null> | null };


export const Get_PetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_PETS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Get_PetsQuery, Get_PetsQueryVariables>;