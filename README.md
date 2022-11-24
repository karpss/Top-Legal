# Top-Legal
An app built with React, Typescript and Graphql

# How to run this project
- git clone the project, then ```yarn install ``` after this ```yarn start``` to start the project.

# Folder Structure
- There is a  Folder that houses the CardDetails Component, A Pages folder that houses the Home Component, Home slice, selector and types files.
- This project uses redux-toolkit for state management, hence the reason for the store, hooks and slice files.
- There is also a selectors file that was created as a result of using the reselect package. This helps to grab value from redux state and creates memoized selector functions.

- There is a services folder that houses graphql queries and a Client service that makes the API calls.
