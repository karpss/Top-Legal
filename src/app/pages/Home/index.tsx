/* eslint-disable */
import React, {useEffect} from 'react'
import charactersService from '../../services/charactersService';
import {useAppDispatch} from "../../hooks"
import { Dispatch } from 'redux';
import { FetchCharactersList } from '../../services/charactersService/__generated__/FetchCharactersList';
import { setCharactersList } from './homeSlice';
import CardDetails from '../../components/CardDetails';


const actionDispatch = (dispatch: Dispatch) => ({
  setCharactersList: (page: FetchCharactersList["characters"]) => dispatch(setCharactersList(page)), 
});







const Home = () => {

  const {setCharactersList} = actionDispatch(useAppDispatch()); 

  useEffect(()=> {
    fetchCharacters();
    },[]);

    const fetchCharacters = async () => {
  
      const charactersList = await charactersService.fetchCharactersList(0).catch((err) => {
        console.log(err);
      });
      // console.log("Characters List", charactersList);
      if (charactersList){
        setCharactersList(charactersList);
      
      }
      };

  return (
    <>
    <CardDetails/>
    </>
  )
}

export default Home