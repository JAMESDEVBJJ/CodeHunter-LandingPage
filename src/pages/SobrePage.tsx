import { Header } from "../components/Header";

import "../style/SobrePage.css";

export function SobrePage() {
  return (
    <div className="container">
      <Header/>
      <section className="sobre-hero">
        <span className="hero-tag">SOBRE O PROJETO</span>

        <h1>
          Encontrar vagas de TI não deveria ser
          <span> uma caça ao tesouro.</span>
        </h1>

        <p>
          Muitas oportunidades ficam escondidas em sites de empresas,
          comunidades e plataformas pouco conhecidas.
        </p>
      </section>

      <section className="problema-section">
        <div className="section-title">
          <span>O problema atual</span>

          <h2>
            A busca por vagas ainda é complicada para muitos desenvolvedores.
          </h2>

          <p>
            Hoje, muitas vagas da área de tecnologia estão espalhadas pela
            internet e não aparecem em plataformas tradicionais. Isso faz com
            que estudantes e desenvolvedores percam tempo procurando
            oportunidades manualmente em dezenas de sites.
          </p>
        </div>

        <div className="cards-container">
          <div className="problem-card">
            <h3>Perda de tempo</h3>

            <p>Horas procurando vagas em diversos sites diferentes.</p>
          </div>

          <div className="problem-card">
            <h3>Poucas oportunidades</h3>

            <p>Muitas vagas reais acabam passando despercebidas.</p>
          </div>

          <div className="problem-card">
            <h3>Dificuldade em entrevistas</h3>

            <p>Menos oportunidades encontradas significa menos chances.</p>
          </div>
        </div>
      </section>

      <section className="solucao-section">
        <div className="solucao-left">
          <span>Nossa solução</span>

          <h2>
            O <strong>CodeHunter</strong> centraliza oportunidades em um único
            lugar.
          </h2>

          <p>
            A plataforma busca vagas automaticamente em diferentes fontes da
            internet, organizando tudo de forma simples e prática. Tudo isso com
            uma interface moderna, rápida e com pouca poluição visual.
          </p>
        </div>

        <div className="solucao-right">
          <div className="solution-box">
            <div className="solution-line"></div>

            <div className="solution-content">
              <span>✓</span>
              <p>Busca automática de vagas</p>
            </div>

            <div className="solution-content">
              <span>✓</span>
              <p>Centralização de oportunidades</p>
            </div>

            <div className="solution-content">
              <span>✓</span>
              <p>Interface limpa e moderna</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projeto-section">
        <div className="projeto-card">
          <span>Sobre o projeto</span>

          <h2>
            Um projeto criado por estudantes para ajudar novos desenvolvedores.
          </h2>

          <p>
            O <strong>CodeHunter</strong> foi desenvolvido por três estudantes
            de ADS da UNICESUSC. O projeto surgiu após
            percebermos a dificuldade de encontrar vagas reais para iniciantes
            na área de TI, principalmente em um mercado competitivo e cheio de
            plataformas desorganizadas.
          </p>
        </div>
      </section>

      <section className="objetivo-section">
        <div className="objetivo-header">
          <span>Nosso objetivo</span>

          <h2>Tornar a busca por vagas mais simples e eficiente.</h2>
        </div>

        <div className="objetivo-grid">
          <div className="objetivo-item">
            <span>01</span>

            <p>
              Facilitar a conexão entre desenvolvedores e oportunidades reais.
            </p>
          </div>

          <div className="objetivo-item">
            <span>02</span>

            <p>Centralizar vagas espalhadas em diferentes plataformas.</p>
          </div>

          <div className="objetivo-item">
            <span>03</span>

            <p>Tornar a busca mais rápida, prática e organizada.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
