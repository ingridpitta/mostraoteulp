import React from "react";
import "./home.styles.scss";

const Home = () => {
  return (
    <main className="home--container">
      <section>
        <img src={require("../../assets/images/capa.png")} alt="capa vem aí" />
      </section>
    </main>
  );
};

export default Home;
