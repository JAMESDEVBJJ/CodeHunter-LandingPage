import { Header } from "../components/Header";
import "../style/Homepage.css";

export function HomePage() {
  return (
    <div className="container">

      <Header showButton/>
 

      <section className="hero">

        <div className="hero-left">

          <div className="svg-wrapper">
        

            <svg
              className="shape-svg"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
        
                <linearGradient
                  id="blueGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="20%" stop-color="#8A8CFF" />
                  <stop offset="75%" stop-color="#002BFF" />
                </linearGradient>
        

        
                <filter id="blur">
                  <feGaussianBlur stdDeviation="20" />
                </filter>
        
              </defs>

              <path
                d="M40 250 L180 110 H320 L180 250 L320 390 H180 Z"
                fill="url(#blueGradient)"
              />
        
              <path
                d="M120 250 L250 120 H390"
                stroke="url(#fadeGradient)"
                stroke-width="80"
                fill="none"
                filter="url(#blur)"
              />
            </svg>
        
            <div className="computer-svg">
        
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
        
                <circle
                  cx="100"
                  cy="90"
                  r="70"
                  fill="#1d3bff"
                  opacity="0.15"
                />
        
                <rect
                  x="40"
                  y="40"
                  width="120"
                  height="80"
                  rx="10"
                  fill="#0b0b0b"
                  stroke="#5c74ff"
                  stroke-width="4"
                />
        
                <text
                  x="62"
                  y="88"
                  fill="#5c74ff"
                  font-size="18"
                  font-family="monospace"
                >
                  &lt;/&gt;
                </text>
        
                <rect
                  x="85"
                  y="122"
                  width="30"
                  height="12"
                  rx="2"
                  fill="#5c74ff"
                />
        
                <rect
                  x="70"
                  y="135"
                  width="60"
                  height="10"
                  rx="5"
                  fill="#d9d9d9"
                />
        
              </svg>
        
            </div>
        
          </div>
        
        </div>

        <div className="hero-right">
          <h1>
            Descubra <span>vagas de TI</span> que não estão no LinkedIn
          </h1>

          <p>
            Nossa plataforma encontra oportunidades
             por toda a internet, organizando e centralizando em um lugar só
              com sites de empresas e comunidades.
          </p>
        </div>
      </section>
    </div>
  );
}