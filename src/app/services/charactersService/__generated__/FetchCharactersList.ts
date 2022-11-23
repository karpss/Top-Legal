/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCharactersList
// ====================================================

export interface FetchCharactersList_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
}

export interface FetchCharactersList_characters_results_location {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface FetchCharactersList_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The character's last known location
   */
  location: FetchCharactersList_characters_results_location | null;
}

export interface FetchCharactersList_characters {
  __typename: "Characters";
  info: FetchCharactersList_characters_info | null;
  results: (FetchCharactersList_characters_results | null)[] | null;
}

export interface FetchCharactersList {
  /**
   * Get the list of all characters
   */
  characters: FetchCharactersList_characters | null;
}

export interface FetchCharactersListVariables {
  page: number;
}
