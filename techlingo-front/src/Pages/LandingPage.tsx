export default function LandingPage() {
  return (
    <>
      <div id="app">
        <div className="blockA">
          <nav className="nav">
            <img
              className="company-logo"
              src="../src/assets/techlingo-logo.png"
              alt="techlingo-logo"
            />
          </nav>
          <div className="wrapper">
            <div className="leftA">
              <div className="lorem-container">
                <h6 className="title-A">
                  Se você trabalha com tecnologia, mas se sente inseguro quando
                  o assunto é inglês, chegou a hora de virar o jogo!
                </h6>
                <p>
                  No Brasil, 60% das vagas exigem fluência em inglês e essa
                  demanda só tende a crescer. Ainda assim, só 1% dos brasileiros
                  é fluente em inglês.
                </p>
              </div>
            </div>
            <div className="rightA">
              <img
                className="tech-student"
                src="../src/assets/girl.png"
                alt="tech-student"
              />
            </div>
          </div>
          <div className="gradient1"></div>
        </div>
        <div className="blockB">
          <div className="container-b">
            <h3>Comece a Aprender Agora</h3>
            <div className="motivational-container">
              <div className="motivational-content">
                <h5 className="lorem-title">Uma Ponte para o Sucesso</h5>
                <p className="contentB">
                  As linguagens de programação, os fóruns internacionais, as
                  certificações reconhecidas globalmente - tudo no reino tech
                  respira inglês.
                </p>
              </div>
              <div className="motivational-content">
                <h5 className="lorem-title">Uma chave que abre portas</h5>
                <p className="contentB">
                  É uma tendência: No Brasil, a proficiência em inglês deve se
                  tornar um pré-requisito para todas as vagas nas áreas de
                  tecnologia até 2027!
                </p>
              </div>
              <div className="motivational-content">
                <h5 className="lorem-title">Novas Oportunidades</h5>
                <p className="contentB">
                  E tem mais: os profissionais que dominam o inglês ganham em
                  média de 30% a 50% a mais. O inglês não é apenas um idioma, é
                  um investimento no seu futuro.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blockC">
          <div className="wrapper">
            <div className="leftC">
              <img className="daniel" src="../src/assets/Daniel.png" alt="" />
            </div>
            <div className="rightC">
              <h2 className="titleC"> O TEACHER DAN</h2>
              <p className="contentC">
                O Teacher Dan é especialista em inglês para o Mundo Tech, tem
                mais de 10 anos de experiência e já ajudou pessoas de diversas
                áreas, desde fazer intercâmbio pela empresa a se preparar para
                entrevista em inglês!
              </p>
              <br />
              <p className="contentC">
                <i>
                  Estarei com vocês do início ao fim dessa jornada. Contem
                  comigo, sempre!
                </i>
              </p>
              <br />
              <p className="contentC">
                Oferecemos conteúdo gravado, lições imersivas e lives semanais
                com o Teacher Dan, o idealizador da TechLingo, além do nosso
                canal no Discord, que conta com a comunidade de alunos e plantão
                de dúvidas, tanto no fórum, quanto em salas privadas, com um de
                nossos tutores.
              </p>
            </div>
          </div>
        </div>
        <div className="blockD">
          <div className="container-d">
            <div className="title-bottom">
              <div className="round">
                Venha para a Techlingo e faça parte dessa jornada
              </div>
            </div>
            <div className="mini-grid">
              <div className="bottomA">
                <h6>
                  Aponte sua câmera para o QR Code abaixo e confira um pouco do
                  nosso material:
                </h6>
                <img
                  className="qrcode"
                  src="../src/assets/qr_code.jpg"
                  alt="qr_code"
                />
              </div>
              <div className="bottomB">
                <p>
                  Os profissionais do futuro estão se preparando no presente. E
                  você? Não deixe o inglês se tornar uma barreira para o
                  sucesso!
                </p>
              </div>
              <div className="bottomC">
                <p>Clique abaixo e acompanhe nossas novidades! </p>
                <a href="https://chat.whatsapp.com/BRcuGTmgWIOBtfCxEIcj21">
                  <img
                    className="zapzap"
                    src="../src/assets/Landing_page_assets_whats.png"
                    alt="icone_whatsapp"
                  />
                </a>
              </div>
            </div>

            <nav className="bottom-logo">
              <img
                className="company-logo"
                src="../src/assets/techlingo-logo.png"
                alt="techlingo-logo"
              />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
