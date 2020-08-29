import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { HomeContent } from "../../components/organisms";
import { SubscriptionForm, FinalMessage } from "../../components/molecules";
import "./home.styles.scss";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      showMessage: false,
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  showMessage = () => {
    this.setState({ showMessage: true });
  };

  closeMessage = () => {
    this.setState({ showMessage: false });
  };

  saveData = async data => {
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, "\n");

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    const {
      name,
      email,
      city,
      state,
      organization,
      phone,
      race,
      gender,
      orientation,
      auth,
    } = data;

    const formatedData = {
      Nome: name,
      Email: email,
      Cidade: city,
      Estado: state,
      Organização: organization,
      Celular: phone,
      Raça: race,
      Gênero: gender,
      Orientação: orientation,
      Autorização: auth ? "Sim" : "Não",
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
    const { showModal, showMessage } = this.state;
    return (
      <main className="home--container">
        {showModal && (
          <div className="modal--background">
            <SubscriptionForm
              closeModal={this.closeModal}
              confirmSubscribe={this.saveData}
            />
          </div>
        )}
        {showMessage && (
          <div className="modal--background">
            <FinalMessage closeMessage={this.closeMessage} />
          </div>
        )}
        <HomeContent subscribe={this.showModal} />
      </main>
    );
  }
}

export default Home;
