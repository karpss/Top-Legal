import React, { useCallback, useEffect } from "react";
import { Dispatch } from "redux";
import charactersService from "../../services/charactersService";
import { useAppDispatch } from "../../hooks";
import { FetchCharactersList } from "../../services/charactersService/__generated__/FetchCharactersList";
import { setCharactersList } from "./homeSlice";
import CardDetails from "../../components";

const actionDispatch = (dispatch: Dispatch) => ({
  setCharactersList: (page: FetchCharactersList["characters"]) =>
    dispatch(setCharactersList(page)),
});

function Home() {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { setCharactersList } = actionDispatch(useAppDispatch());

  const fetchCharacters = useCallback(async () => {
    const charactersList = await charactersService
      .fetchCharactersList(0)
      .catch((err) => {
        return err;
      });
    if (charactersList) {
      setCharactersList(charactersList);
    }
  }, [setCharactersList]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      <CardDetails />
    </div>
  );
}

export default Home;
