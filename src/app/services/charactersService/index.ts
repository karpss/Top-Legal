/* eslint-disable */
import { apolloClient } from "../../graphql";
import { FETCH_CHARACTERS_LIST } from "./queries";
import { FetchCharactersList } from "./__generated__/FetchCharactersList";

class CharacterService{
    async fetchCharactersList(page: Number): Promise<FetchCharactersList["characters"]> {
        try {
            const response = await apolloClient.query({
                query: FETCH_CHARACTERS_LIST,
                variables: { page }
            });
            if (!response || !response.data) {
                throw new Error("Something went wrong")
                
            };
            return response.data.characters;
        } catch (err) {
            throw err;
        }
    }

}

export default new CharacterService();