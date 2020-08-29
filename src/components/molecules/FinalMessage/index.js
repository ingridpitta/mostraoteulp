import React from "react";
import { Title, Text } from "../../atoms";
import "./finalMessage.styles.scss";

const FinalMessage = ({ closeMessage }) => {
  return (
    <div className="finalMessage--container">
      <Title title="Seus dados foram enviados com sucesso." />
      <Text text="Você receberá um e-mail sempre que tivermos novidades :)" />
      <div className="btn--modal--cta--full">
        <button onClick={closeMessage}>VOLTAR</button>
      </div>
    </div>
  );
};

export default FinalMessage;
