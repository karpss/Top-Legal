import { apolloClient } from "../../graphql";
import { FETCH_CHARACTERS_LIST } from "./queries";
import { FetchCharactersList } from "./__generated__/FetchCharactersList";

class CharacterService {
  // eslint-disable-next-line class-methods-use-this
  async fetchCharactersList(
    page: Number,
  ): Promise<FetchCharactersList["characters"]> {
    const response = await apolloClient.query({
      query: FETCH_CHARACTERS_LIST,
      variables: { page },
    });
    if (!response || !response.data) {
      throw new Error("Something went wrong");
    }
    return response.data.characters;
  }
}

export default new CharacterService();
