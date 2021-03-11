import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { RegisterFormContent } from "../../components/organisms";
import "./registerForm.styles.scss";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showMessage: false,

      initialState: {
        name: "",
        email: "",
        organization: "",
        works: "",
        social: "",
        gender: "",
        race: "",
        comments: "",
      },
    };
  }

  showMessage = () => {
    this.setState({ showMessage: true });
  };

  closeMessage = () => {
    this.setState({ showMessage: false });
  };

  saveData = async (data) => {
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, "\n");

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const {
      name,
      email,
      organization,
      works,
      social,
      gender,
      race,
      comments,
    } = data;

    const formatedData = {
      Nome: name,
      Email: email,
      Coletivo: organization,
      Trabalhos: works,
      Rede_Social: social,
      Gênero: gender,
      Raça: race,
      Comentário: comments,
    };

    const newState ={
      name: "",
      email: "",
      organization: "",
      works: "",
      social: "",
      gender: "",
      race: "",
      comments: "",
    }

    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(formatedData);
      
      this.setState({initialState: newState});
      // this.showMessage();
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  render() {
    return (
      <main className="registerForm--container">
        <RegisterFormContent
          subscribe={this.saveData}
          initialState={this.state.initialState}
        />
      </main>
    );
  }
}

export default Home;
