import React, { Component } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import "./about.styles.scss";

class About extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
    };
  }

  componentDidMount = async () => {
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_TEAM_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_TEAM_ID;
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
      const team = rows.map((each, index) => {
        const { Nome, Foto } = each;

        const teamModel = {
          id: index,
          name: Nome,
          photo: Foto
        };

        console.log({ teamModel });

        return teamModel;
      });

      this.setState({
        team,
      });
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  render() {
    const { team } = this.state;
    console.log({
      team,
    });
    return (
      <main className="about--container">
        <div className="about--grid">
          <section className="left">
            <article className="about--mostra">
              <h2> O que é a Mostra o Teu!?</h2>
              <p>
                O movimento Mostra o Teu! se iniciou a partir das inquietações de
                um coletivo de estudantes de Design da Universidade Federal do
                Ceará diante da carência de espaços de exposição, venda e troca
                de produções, nos campos de arte e design, e de compartilhamento
                de experiências para artistas independentes de Fortaleza.
              </p>
              <p>
                Enquanto forma de falar e processo de criação, a Mostra se
                propõe a ser dispositivo de acesso, partilha e visibilidade para
                artistas e produções independentes. Traz, junto e a partir disso,
                questionamentos sobre protagonismo, visibilidade e
                fortalecimento de redes na produção artística e cultural
                independente, tomando a própria arte como instrumento político e
                catalisador de pertença.
              </p>
              <p>
                Em constante transformação, pautada sempre em ideias de
                construção coletiva, a Mostra o Teu! vem desde então reinventando
                seus caminhos a partir das experiências vividas. Da discussão
                inicial sobre os espaços de arte e design independentes
                existentes em Fortaleza, a Mostra mergulhou no tema Design e
                Ativismo em sua segunda edição para expandir o entendimento dos
                jeitos de se enxergar enquanto rede de fortalecimento, criação e
                ativação. Como produto desses processos: um ecossistema criativo.
              </p>
            </article>
            <article className="about--eco">
              <h2> O que é o Ecossistema Criativo?</h2>
              <h3> Somos uma rede de artistas e artes independentes.</h3>
              <p>
                A Mostra o Teu! Ecossistema Criativo articula os eixos de
                cooperação, aprendizagem, compartilhamento e ação como vértices
                das relações dessa rede, onde os participantes interagem com o
                sistema e são cocriadores da manutenção da rede,
                simultaneamente. Como resultado disso, temos um conjunto de
                ferramentas que incentiva processos ativo - cooperativos em
                encontros emergentes geradores de espaços de ativação e
                circulação de produções criativas, propícias a transformações
                políticas no contexto em que são propostas.
              </p>
              <p>
                Assim, através do planejamento sistêmico entre pessoas,
                atividades e recursos dos territórios, produtores independentes
                locais recriam espaços nas cidades para a propagação de ideias e
                produções, dando força e expansão às iniciativas coletivas
                cearenses.
              </p>
            </article>
            <article className="how">
              <h2> Como funciona o Ecossistema?</h2>
              <p>
                O ecossistema se baseia nos parâmetros agir, aprender, cooperar
                e compartilhar e são eles que direcionam os objetivos ativos e
                processos criativos de ativação da rede. O objetivo principal
                dessa rede é proporcionar encontros de ideias e pessoas,
                virtuais nesse primeiro momento, fortalecendo a ação coletiva e
                ativando as potencialidades individuais de cada pessoa a partir
                do próprio trabalho.
              </p>
              <p>
                Essa dinâmica resulta no esquema de manutenção e
                retroalimentação do Ecossistema a partir de encontros
                colaborativos independentes com memória e acervos(entre artes e
                ativismos) cultivados permanentemente.
              </p>
              <p>
                As possibilidades do que fazer são muitas e isso caracteriza a
                abertura do projeto: tu é agente direto do que pode ou não fazer
                acontecer. Ao realizar alguma proposta dentro do Ecossistema, tu
                ajuda a construir esse novo movimento cultural.Bora nessa ?
              </p>
            </article>
            <article className="points">
              <h2> Quais os objetivos da plataforma?</h2>
              <p>
                Reconfigurando nossa ação presencial para se enquadrar à
                situação de pandemia e buscando uma continuidade ativa para o
                projeto, a Mostra o Teu!recorreu ao ambiente virtual sob a forma
                de site para abrigar e articular o Ecossistema Criativo.
              </p>
              <p>
                Esse formato digital vai de encontro à documentação e mediação
                das propostas realizadas nos três últimos anos. Buscamos
                igualmente ativar novas produções que instiguem a reflexão e a
                ação sob o contexto de pandemia e crise política e social que
                estamos vivendo, dado que isso atinge diretamente as produções
                independentes. Pretendemos, em suma, fomentar o protagonismo em
                futuras ações coletivas que possam partir dessas novas
                interações e conexões propícias dentro do ecossistema.
              </p>
            </article>
          </section>
          <section className="right">
            <article className="whoWeAre">
              <div className="whoWeAre--text">
                <h2> Quem somos?</h2>
                <p>
                  Somos designers, produtores, artistas e ativistas e queremos
                  construir pontes de acesso e visibilidade a produções
                  independentes, para criarmos juntos arte coletiva, que fale
                  por nós, todos nós!
                </p>
              </div>
              <div className="team--container">
                {team.map((person) => {
                  const { index, name, photo } = person;
                  return (
                    <div key={`${index}--${name}`}>
                      <div>
                        <img src={`/images/we/${photo}`} alt={name} />
                      </div>
                      <h3> {name} </h3>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    );
  }
}

export default About;
