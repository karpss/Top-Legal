/* eslint-disable */
import React from "react";
import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import CardDetails from "..";
import { MockedProvider } from "@apollo/client/testing";
import { FETCH_CHARACTERS_LIST } from "../../services/charactersService/queries";







const mocks:any = [
{
  request: {
    query: FETCH_CHARACTERS_LIST,
    variables: {
      page: 1
    }
  },

  
    data: {
    characters: {
      results: [
        {
          "id": "1",
          "name": "Rick Sanchez",
          "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          "status": "Alive",
          "type": "",
          "gender": "Male",
          "location": {
            "name": "Citadel of Ricks"
          }
        }
      ]
    }
  }
  
}


]



console.log("Here", mocks)







describe("Card Details Component", () => {
  // it("renders character details", () => {
  //   render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //     <Provider store={store}>
      
  //     <CardDetails  />
      
  //     </Provider>
  //     </MockedProvider>);
    //const header = screen.getByText(/^Rick Sanchez$/i); // full string match, ignore case
    //const createdDate = screen.getByText(/^2017-11-4$/i);
   // const status = screen.getByText(/^unknown$/i);
    //const species = screen.getByText(/^Human$/i);
   // const origin = screen.getByText(/Earth/i); // substring match, ignore case
   // const gender = screen.getByText(/^Male$/i);
    //expect(header).toBeInTheDocument();
    //expect(createdDate).toBeInTheDocument();
    //expect(status).toBeInTheDocument();
    //expect(species).toBeInTheDocument();
    //expect(origin).toBeInTheDocument();
   // expect(gender).toBeInTheDocument();
  //});





  it("should render CardDetails component", () => {
    const { container } = render(
      <Provider store={store}>
        <CardDetails />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
