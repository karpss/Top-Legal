import { createSelector } from "reselect";
import { IRootState } from "../../types";

const selectHome = (state: IRootState) => state.home;

const makeSelectCharactersList = createSelector(
  selectHome,
  (home) => home.charactersList,
);

export default makeSelectCharactersList;
