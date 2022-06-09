import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  IconButton,
  Link,
  Tabs,
  Tab,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Footer from '../components/Footer';
import Header from '../components/Header';
import DropDownGroupSelector from '../components/DropDownGroupSelector';
import RemunerationBarGraph from '../components/RemunerationBarGraph';
import IndexChartLegend from '../components/IndexChartLegend';
import api from '../services/api';
import MONTHS from '../@types/MONTHS';
import light from '../styles/theme-light';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Index({
  agencyAmount,
  monthAmount,
  startDate,
  endDate,
  recordAmount,
  finalValue,
}) {
  const formatedStartDate = useMemo<string>(() => {
    const d = new Date(startDate);
    return `${MONTHS[d.getMonth() + 1]} de ${d.getFullYear()}`;
  }, [startDate]);
  const formatedEndDate = useMemo<string>(() => {
    const d = new Date(endDate);
    return `${MONTHS[d.getMonth() + 1]} de ${d.getFullYear()}`;
  }, [endDate]);
  const [completeChartData, setCompleteChartData] = useState<any[]>([]);
  const [year, setYear] = useState(new Date().getFullYear() - 1);
  const [loading, setLoading] = useState(true);
  const nextDateIsNavigable = useMemo<boolean>(
    () => year !== new Date().getFullYear(),
    [year],
  );
  const previousDateIsNavigable = useMemo<boolean>(() => year !== 2018, [year]);
  useEffect(() => {
    fetchGeneralChartData();
  }, [year]);
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  async function fetchGeneralChartData() {
    try {
      const { data } = await api.ui.get(`/geral/remuneracao/${year}`);
      setCompleteChartData(
        data.map(d => ({
          BaseRemuneration: d.base_remuneration,
          OtherRemunerations: d.other_remunerations,
          // eslint-disable-next-line no-underscore-dangle
          Month: d._id,
        })),
      );
    } catch (error) {
      setCompleteChartData([]);
    }
    setLoading(false);
  }
  return (
    <Page>
      <Head>
        <title>DadosJusBr</title>
        <meta property="og:image" content="/img/icon_dadosjus_background.png" />
        <meta property="og:title" content="DadosJusBr" />
        <meta
          property="og:description"
          content="DadosJusBr é uma plataforma que realiza a libertação continua de dados de remuneração de sistema de justiça brasileiro."
        />
      </Head>
      <Header />
      <Container fixed>
        <Headline>
          O DadosJusBr recupera continuamente dados dos diferentes orgãos do
          sistema de justiça, os padroniza e publica como dado aberto.
          Libertamos os dados.
          <br />
          Já são{' '}
          <Typography variant="inherit" component="span" color="success.main">
            {monthAmount}
          </Typography>{' '}
          Meses de{' '}
          <Typography variant="inherit" component="span" color="success.main">
            {agencyAmount}
          </Typography>{' '}
          Orgãos libertados!
          <Box py={4}>
            <Typography component="p">
              Os dados vão de {formatedStartDate} a {formatedEndDate}, e incluem{' '}
              <Typography
                variant="inherit"
                component="span"
                color="success.main"
              >
                {recordAmount}
              </Typography>{' '}
              registros de pagamentos de salários, indenizações, gratificações e
              diárias, somando{' '}
              <Typography
                variant="inherit"
                component="span"
                color="success.main"
              >
                R$ {(finalValue / 1000000000).toFixed(2)} bilhões
              </Typography>
              .
            </Typography>
          </Box>
          <Grid container spacing={2} display="flex" alignItems="center">
            {/* <Grid item xs={4} textAlign="center">
              <Button color="info" size="large" endIcon={<ArrowDownwardIcon />}>
                Índice de transparência
              </Button>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Button color="info" size="large" endIcon={<ArrowDownwardIcon />}>
                Dados gerais
              </Button>
            </Grid> */}
            <Grid item>
              <Typography variant="h6">Navegue pelos dados:</Typography>
            </Grid>
            <Grid item>
              <DropDownGroupSelector />
            </Grid>
          </Grid>
        </Headline>
      </Container>
      <ThemeProvider theme={light}>
        <Paper elevation={0} square>
          <Container>
            <Box my={4} pt={8} pb={4}>
              <Typography variant="h2" textAlign="center">
                Índice de Transparência
              </Typography>
              <Grid container justifyContent="center" py={4}>
                <Grid item width={692}>
                  <p>
                    O Índice de Transparência é composto por duas dimensões:
                    facilidade e completude. Cada uma das dimensões, por sua
                    vez, é composta por até seis critérios em cada prestação de
                    contas, que são avaliados mês a mês. O índice corresponde à
                    média harmônica das duas dimensões.{' '}
                    <Link href="/indice" color="inherit">
                      Saiba mais
                    </Link>
                    .
                  </p>
                  <p>
                    Este gráfico representa dados de <b>janeiro de 2018</b> até{' '}
                    <b>abril de 2022</b> e foi gerado em{' '}
                    <b>19 de maio de 2022</b>
                  </p>
                </Grid>
                <Grid item width={900}>
                  <Grid container justifyContent="center" pt={4} pb={2}>
                    <Grid item>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Gráfico do índice de transparêncai"
                      >
                        <Tab label="Tribunais de justiça" {...a11yProps(0)} />
                        <Tab label="Ministérios públicos" {...a11yProps(1)} />
                      </Tabs>
                    </Grid>
                  </Grid>
                  <TabPanel value={value} index={0}>
                    <Box textAlign="center">
                      <IndexChartLegend />
                      <img
                        src="/img/indice_tjs.png"
                        alt="Índice de transparência"
                        width="100%"
                      />
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Box textAlign="center">
                      <IndexChartLegend />
                      <img
                        src="/img/indice_mps.png"
                        alt="Índice de transparência"
                        width="100%"
                      />
                    </Box>
                  </TabPanel>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Paper>
        <Container>
          <Box my={12}>
            <Typography variant="h2" textAlign="center">
              Total das remunerações dos membros dos Tribunais de Justiça e
              Ministérios Públicos
            </Typography>
            <Box textAlign="center">
              <IconButton
                aria-label="voltar"
                color="info"
                onClick={() => setYear(year - 1)}
                disabled={!previousDateIsNavigable}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <Typography component="span" variant="h6">
                {year}
              </Typography>
              <IconButton
                aria-label="voltar"
                color="info"
                onClick={() => setYear(year + 1)}
                disabled={!nextDateIsNavigable}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            <Box my={4}>
              <RemunerationBarGraph
                year={year}
                agency={null}
                data={completeChartData}
                dataLoading={loading}
                billion
              />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Footer />
    </Page>
  );
}
export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { data } = await api.ui.get('/geral/resumo');
    return {
      props: {
        agencyAmount: data.AgencyAmount,
        monthAmount: data.MonthlyTotalsAmount,
        startDate: data.StartDate,
        endDate: data.EndDate,
        recordAmount: `${data.RemunerationRecordsCount}`,
        finalValue: `${data.GeneralRemunerationValue}`,
      },
    };
  } catch (err) {
    // context.res.writeHead(301, {
    //   Location: `/404`,
    // });
    // context.res.end();
    return { props: {} };
  }
};
const Page = styled.div`
  background: #3e5363;
`;
const Headline = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  background-image: url('img/bg.svg');
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: 600px) {
    padding-right: 8rem;
    font-size: 2rem;
  }
  @media (min-width: 900px) {
    padding-right: 20rem;
    font-size: 2rem;
  }
`;
