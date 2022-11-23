/* eslint-disable */
import { FetchCharactersList } from "../../services/charactersService/__generated__/FetchCharactersList";


export interface IHomeState {
    charactersList:FetchCharactersList["characters"]
}