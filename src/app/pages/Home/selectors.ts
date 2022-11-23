/* eslint-disable */

import { createSelector } from "reselect";
import { IRootState } from "../../types";


const selectHome = (state:IRootState) => state.home;

export const makeSelectCharactersList = createSelector(
    selectHome,
    (home) => home.charactersList
)