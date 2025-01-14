import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import Footer from '../components/Footer';
import Nav from '../components/Header';
import api from '../services/api';
import { formatAgency } from '../functions/format';

export default function Index({ ais }) {
  const collecting = ais
    .filter(ag => ag.collecting === null)
    .sort((a, b) => {
      if (a.uf > b.uf) {
        return 1;
      }
      if (a.uf < b.uf) {
        return -1;
      }
      return 0;
    });
  const notCollecting = ais.filter(ag => ag.collecting !== null);

  const getReasons = ag => {
    if (
      ag.collecting &&
      ag.collecting.length > 0 &&
      ag.collecting[0].description
    ) {
      return ag.collecting[0].description.map(desc => `${desc}. `);
    }
    return '';
  };

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
      <Nav />
      <Container fixed>
        <Box py={4}>
          <Box pb={4}>
            <Typography variant="h1" textAlign="center" gutterBottom>
              Status das coletas de dados
            </Typography>
            <Typography variant="h3" gutterBottom>
              Órgãos monitorados pelo DadosJusBR: {collecting.length}
            </Typography>
            <List dense>
              {collecting.map(ag => (
                <ListItem key={ag.aid}>
                  <ListItemIcon>
                    <Upper>{formatAgency(ag.aid, ag.name)}</Upper>
                  </ListItemIcon>
                  <ListItemText>{ag.name}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Typography variant="h3" gutterBottom pt={4}>
              Órgãos NÃO monitorados pelo DadosJusBR: {notCollecting.length}
            </Typography>
            <List dense>
              {notCollecting.map(ag => (
                <ListItem key={ag.aid}>
                  <ListItemIcon>
                    <Upper>{formatAgency(ag.aid, ag.name)}</Upper>
                  </ListItemIcon>
                  <ListItemText secondary={getReasons(ag)}>
                    {ag.name}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Page>
  );
}

export async function getServerSideProps() {
  try {
    const res = await api.default.get('/orgaos');
    return {
      props: {
        ais: res.data,
      },
    };
  } catch (err) {
    return {
      props: {
        ais: [],
      },
    };
  }
}

const Page = styled.div`
  background: #3e5363;
`;

const Upper = styled.span`
  text-transform: uppercase;
`;
