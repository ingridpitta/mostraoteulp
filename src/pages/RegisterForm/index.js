import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { RegisterFormContent } from "../../components/organisms";
import { FinalMessage } from "../../components/molecules";
import "./registerForm.styles.scss";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showMessage: false,
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

    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(formatedData);

      this.showMessage();
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  render() {
    const { showMessage } = this.state;
    return (
      <main className="registerForm--container">
        {showMessage && (
          <div className="modal--background">
            <FinalMessage closeMessage={this.closeMessage} />
          </div>
        )}
        <RegisterFormContent subscribe={this.saveData} />
      </main>
    );
  }
}

export default Home;
