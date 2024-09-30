import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { QuestionnaireList } from "./questionnaire/QuestionnaireList";
import { QuestionnaireCreate } from "./questionnaire/QuestionnaireCreate";
import { QuestionnaireEdit } from "./questionnaire/QuestionnaireEdit";
import { QuestionnaireShow } from "./questionnaire/QuestionnaireShow";
import { ApartmentList } from "./apartment/ApartmentList";
import { ApartmentCreate } from "./apartment/ApartmentCreate";
import { ApartmentEdit } from "./apartment/ApartmentEdit";
import { ApartmentShow } from "./apartment/ApartmentShow";
import { FavoriteList } from "./favorite/FavoriteList";
import { FavoriteCreate } from "./favorite/FavoriteCreate";
import { FavoriteEdit } from "./favorite/FavoriteEdit";
import { FavoriteShow } from "./favorite/FavoriteShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ApartmentListingsService"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Questionnaire"
          list={QuestionnaireList}
          edit={QuestionnaireEdit}
          create={QuestionnaireCreate}
          show={QuestionnaireShow}
        />
        <Resource
          name="Apartment"
          list={ApartmentList}
          edit={ApartmentEdit}
          create={ApartmentCreate}
          show={ApartmentShow}
        />
        <Resource
          name="Favorite"
          list={FavoriteList}
          edit={FavoriteEdit}
          create={FavoriteCreate}
          show={FavoriteShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
