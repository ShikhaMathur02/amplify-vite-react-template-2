/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPetstoreModel = /* GraphQL */ `
  query GetPetstoreModel($id: ID!) {
    getPetstoreModel(id: $id) {
      id
      Name
      About
      Age
      Colour
      Image
      Breed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPetstoreModels = /* GraphQL */ `
  query ListPetstoreModels(
    $filter: ModelPetstoreModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPetstoreModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        About
        Age
        Colour
        Image
        Breed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
