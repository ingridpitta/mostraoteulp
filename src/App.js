import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { Home, RegisterForm, Gallery, Portfolio, Project, About } from "./pages";
import Template from "./components/template";
import { Switch, Route } from "react-router-dom";
import "./app.styles.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sheet: [],
      doc: [],
      artists: [],
    };
  }

  componentDidMount = async () => {
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_PROJECTS_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_PROJECTS_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, "\n");

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const rows = await sheet.getRows();
      const artists = rows.map((artist, index) => {
        const {
          Nome,
          Foto,
          Bio,
          Ano_1,
          Ano_2,
          Ano_3,
          Ano_4,
          Ano_5,
          Descricao_1,
          Descricao_2,
          Descricao_3,
          Descricao_4,
          Descricao_5,
          Ficha_Tec_1,
          Ficha_Tec_2,
          Ficha_Tec_3,
          Ficha_Tec_4,
          Ficha_Tec_5,
          Titulo_Trab_1,
          Titulo_Trab_2,
          Titulo_Trab_3,
          Titulo_Trab_4,
          Titulo_Trab_5,
          Trabalho_1,
          Trabalho_2,
          Trabalho_3,
          Trabalho_4,
          Trabalho_5,
          Ed_mostra,
        } = artist;

        const artistModel = {
          id: index,
          name: Nome,
          bio: Bio,
          photo: Foto,
          ed_mostra: Ed_mostra,
          projects: [
            {
              index: "project_1",
              artist: Nome,
              title: Titulo_Trab_1 == "-" ? undefined : Titulo_Trab_1,
              description: Descricao_1,
              year: Ano_1,
              datasheet: Ficha_Tec_1,
              links: Trabalho_1.split(","),
            },
            {
              index: "project_2",
              artist: Nome,
              title: Titulo_Trab_2 == "-" ? undefined : Titulo_Trab_2,
              description: Descricao_2,
              year: Ano_2,
              datasheet: Ficha_Tec_2,
              links: Trabalho_2.split(","),
            },
            {
              index: "project_3",
              artist: Nome,
              title: Titulo_Trab_3 == "-" ? undefined : Titulo_Trab_3,
              description: Descricao_3,
              year: Ano_3,
              datasheet: Ficha_Tec_3,
              links: Trabalho_3.split(","),
            },
            {
              index: "project_4",
              artist: Nome,
              title: Titulo_Trab_4 == "-" ? undefined : Titulo_Trab_4,
              description: Descricao_4,
              year: Ano_4,
              datasheet: Ficha_Tec_4,
              links: Trabalho_4.split(","),
            },
            {
              index: "project_5",
              artist: Nome,
              title: Titulo_Trab_5 == "-" ? undefined : Titulo_Trab_5,
              description: Descricao_5,
              year: Ano_5,
              datasheet: Ficha_Tec_5,
              links: Trabalho_5.split(","),
            },
          ],
        };

        return artistModel;
      });

      this.setState({ sheet: rows, doc, artists });
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  render() {
    const { sheet, doc, artists } = this.state;
    console.log({ sheet, doc, artists });

    return (
      <Switch>
        <Template>
          <Route exact path="/" render={(props) => <Home {...props}/>} />
          <Route
            exact
            path="/about"
            render={(props) => <About {...props} />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <RegisterForm {...props} />}
          />
          <Route
            exact
            path="/gallery"
            render={(props) => <Gallery artists={artists} {...props} />}
          />
          <Route
            path="/portfolio"
            render={(props) => <Portfolio artists={artists} {...props} />}
          />
          <Route
            path="/project"
            render={(props) => <Project artists={artists} {...props} />}
          />
        </Template>
      </Switch>
    );
  }
}

export default App;
