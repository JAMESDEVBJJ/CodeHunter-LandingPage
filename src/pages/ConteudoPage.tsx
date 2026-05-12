import { Header } from "../components/Header";

import "../style/ConteudoPage.css";

export function ConteudoPage() {
  return (
    <div className="container">
      <Header />

      <section className="conteudo-hero">
        <div className="hero-blur"></div>

        <span>CONTEÚDO</span>

        <h1>Tudo o que você precisa para encontrar vagas de TI.</h1>

        <p>
          Uma plataforma criada para facilitar a busca por oportunidades reais
          na área da tecnologia.
        </p>
      </section>

      <section className="beneficios-section">
        <div className="section-header">
          <span>Benefícios</span>

          <h2>Por que usar o CodeHunter?</h2>
        </div>

        <div className="beneficios-grid">
          <div className="beneficio-card">
            <div className="card-icon">⏱</div>

            <h3>Economiza tempo</h3>

            <p>
              Encontre oportunidades rapidamente sem precisar acessar dezenas de
              sites.
            </p>
          </div>

          <div className="beneficio-card">
            <div className="card-icon">🔎</div>

            <h3>Vagas escondidas</h3>

            <p>
              Descubra oportunidades que normalmente não aparecem em plataformas
              tradicionais.
            </p>
          </div>

          <div className="beneficio-card">
            <div className="card-icon">📁</div>

            <h3>Tudo centralizado</h3>

            <p>As vagas ficam organizadas em um único lugar.</p>
          </div>

          <div className="beneficio-card">
            <div className="card-icon">💻</div>

            <h3>Busca focada em TI</h3>

            <p>
              O sistema é pensado especialmente para estudantes e
              desenvolvedores.
            </p>
          </div>

          <div className="beneficio-card">
            <div className="card-icon">🚀</div>

            <h3>Mais chances</h3>

            <p>
              Mais oportunidades encontradas significa mais chances de
              contratação.
            </p>
          </div>
        </div>
      </section>

      <section className="funcionalidades-section">
        <div className="funcionalidades-left">
          <span>Funcionalidades</span>

          <h2>Funcionalidades principais</h2>

          <p>
            O CodeHunter foi pensado para tornar a experiência de busca por
            vagas mais simples, organizada e eficiente.
          </p>
        </div>

        <div className="funcionalidades-right">

          <div className="feature-item">
            <span>✓</span>
            <p>Organização inteligente</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Interface simples e rápida</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Filtros de vagas</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Sugestão de vagas com analises de IA</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Avaliações e comentários</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Centralização de oportunidades</p>
          </div>

          <div className="feature-item">
            <span>✓</span>
            <p>Mapa de vagas</p>
          </div>
        </div>
      </section>
    </div>
  );
}
