import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Nav from '../components/Header';

export default function Index() {
  return (
    <>
      <Head>
        <title>DadosJusBr</title>
      </Head>
      <Nav />
      <Container>
        <div>
          <h2>VOCÊ JÁ TENTOU ACESSAR DADOS EM SITES DE ÓRGÃOS PÚBLICOS?</h2>
          <br />A Lei Federal 12.527/2011, ou mais comumente conhecida como Lei
          de Acesso à Informação (LAI), diz que é “obrigatória a divulgação em
          sítios oficiais da rede mundial de computadores (internet)” dos dados
          de gastos públicos.
          <br />
          <br /> Porém, a LAI pouco diz sobre a forma como esses dados devem ser
          disponibilizados. Por isso, nos sites dos órgãos são encontrados
          arquivos em diversos formatos (pdf, html, planilhas eletrônicas, json
          e etc), além disso nomenclaturas e formatação são muitas vezes
          diferentes para cada órgão.
          <br />
          <br /> Devido a essas características realizar um controle social e
          financeiro sobre essa enorme quantidade de dados de gastos públicos é
          uma tarefa difícil para uma pessoa.
        </div>
        <Animation>
          <span className="context">
            <img
              src="img/anim-group-1/esquema.svg"
              alt="esquema_anim_group_1"
              id="esquema_anim_group_1"
            />
            <img
              src="img/anim-group-1/grafico_0.svg"
              alt="grafico_0_anim_group_1"
              id="grafico_0_anim_group_1"
            />
            <img
              src="img/anim-group-1/grafico_1.svg"
              alt="grafico_1_anim_group_1"
              id="grafico_1_anim_group_1"
            />
            <img
              src="img/anim-group-1/icon_documento.svg"
              alt="icon_documento_anim_group_1"
              id="icon_documento_up_anim_group_1"
            />
            <img
              src="img/anim-group-1/icon_documento.svg"
              alt="icon_documento_anim_group_1"
              id="icon_documento_down_anim_group_1"
            />
            <img
              src="img/anim-group-1/icon_documento.svg"
              alt="icon_documento_anim_group_1"
              id="icon_documento_right_anim_group_1"
            />
            <img
              src="img/anim-group-1/icon_predio.svg"
              alt="icon_predio_anim_group_1"
              id="icon_predio_anim_group_1"
            />
            <img
              src="img/anim-group-1/seta.svg"
              alt="seta_anim_group_1"
              id="seta_1_anim_group_1"
            />
            <img
              src="img/anim-group-1/seta.svg"
              alt="seta_anim_group_1"
              id="seta_2_anim_group_1"
            />
          </span>
          <Button
            backgroundColor="#2FBB96"
            borderColor="#2FBB96"
            hoverTextColor="#2FBB96"
            hoverBackgroundColor="#3e5363"
          >
            Acessar os dados libertados
          </Button>
        </Animation>
      </Container>
      <ExclamativeText>
        <h2>O DADOSJUSBR EXISTE PARA DENUNCIAR E LIBERTAR ESTES DADOS.</h2>
      </ExclamativeText>
      <Container>
        <div>
          <h2> COMO NÓS FAZEMOS ISSO?</h2>
          <br />
          Os agentes públicos do sistema de justiça brasileiro recebem outras
          verbas, além de seus salários, para exercerem seus cargos. Dentre elas
          encontramos auxílio moradia, despesas com saúde, auxílio transporte,
          gratificações, diárias, entre outros benefícios.
        </div>
        <Animation>
          <span className="context">
            <img
              src="img/anim-group-1/esquema.svg"
              alt="esquema_anim_group_1"
              id="esquema_anim_group_1"
            />
          </span>
        </Animation>
      </Container>
      <Container>
        <div>
          Inspirados em projetos como o <b>Serenata de amor</b> e{' '}
          <b>Brasil.io</b>, o <b>DadosJusBr</b> surge com o objetivo de
          apresentar de forma detalhada, organizada e unificada os dados de
          gastos com remuneração dos órgãos que constituem o sistema de justiça
          brasileiro, assim facilitando o acesso e promovendo o controle social
          sobre esses gastos do poder judiciário, ministério público, defensoria
          pública e procuradorias.
        </div>
        <Animation>
          <span className="context">
            <img
              src="img/anim-group-1/esquema.svg"
              alt="esquema_anim_group_1"
              id="esquema_anim_group_1"
            />
          </span>
        </Animation>
      </Container>
      <Container>
        <div>
          O <b>DadosJusBr</b> utiliza a inteligência de dados para a ação
          cidadã, promovendo um acesso mais democrático e fácil aos dados de
          remuneração do sistema de justiça brasileiro. No DadosJusBr podemos
          entender como cada juiz, promotor e desembargador são remunerados.
          Quais auxílios recebem? Quais os valores destes auxílios? Quanto além
          do salário um funcionário recebeu em determinado mês? Quanto um órgão
          gastou em determinado mês? Todas essas perguntas podem ser respondidas
          através do DadosJusBr.
        </div>
        <Animation>
          <span className="context">
            <img
              src="img/anim-group-1/esquema.svg"
              alt="esquema_anim_group_1"
              id="esquema_anim_group_1"
            />
          </span>
        </Animation>
      </Container>
      <Footer />
    </>
  );
}
const anim1 = keyframes`
  0%{
    display:block;
    opacity:0;
  }
  100%{
    opacity:255;
  }

`;

const anim2 = keyframes`
    form {
        transform: scale(1);
    }
    to {
        transform: scale(1.02);
    }
`;

const anim3 = keyframes`
    form {
        transform: scale(1);
    }
    to {
        transform: scale(1.02);
    }
`;

const anim4 = keyframes`
    form {
        transform: scale(1);
    }
    to {
        transform: scale(1.02);
    }
`;

const Container = styled.div`
  display: flex;
  margin: 0px 68px;
  justify-content: space-between;
  color: #fff;
  padding-top: 14rem;
  padding-bottom: 14rem;
  @media (max-width: 600px) {
    padding: 0;
    margin: 0px 20px;
  }
  div {
    max-width: 45%;
    font-size: 2rem;
    * {
      font-size: 2rem;
    }
    font-family: 'Roboto Condensed', sans-serif;
  }
  @media (max-width: 600px) {
    div {
      max-width: 100%;
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
    flex-direction: column;
  }
`;
const Animation = styled.div`
  display: flex;
  .context {
    margin: 0;
    width: 100%;
    height: 10rem;
    display: flex;
    position: relative;
    &:hover {
      animation: ${anim1} 3s linear infinite;
    }

    #icon_predio_anim_group_1 {
      left: -220px;
      top: 10px;
    }
    #icon_documento_right_anim_group_1 {
      left: 190px;
      top: 30px;
    }
    #seta_1_anim_group_1 {
      left: -110px;
      top: 40px;
    }
    #seta_2_anim_group_1 {
      left: 290px;
      top: 40px;
    }
    #grafico_0_anim_group_1 {
      left: 400px;
      top: -10px;
    }
    #grafico_1_anim_group_1 {
      top: 50px;
      left: 400px;
    }
    #icon_documento_up_anim_group_1 {
      top: -60px;
    }
    #icon_documento_down_anim_group_1 {
      top: 130px;
      left: -10px;
    }
    #esquema_anim_group_1 {
      display: block;
    }
    img {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      display: none;
      right: 0;
      text-align: center;
    }
    button:hover + & {
      background-color: red;
    }
  }
  @media (max-width: 600px) {
    .context {
      margin: 0;
    }
  }
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  button {
    margin-top: 120px;
  }
`;
const ExclamativeText = styled.div`
  background-color: #7f3d8b;
  padding: 10rem 8rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 5rem;
  color: #fff;
  text-align: center;
  background-image: url('/img/splash_background.png');
`;
