import styled from 'styled-components';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import api from '../../../../services/api';
import AgencyWithNavigation from '../../../../components/AgencyWithNavigation';

export default function AgencyPage({
  id,
  year,
  agency,
  data,
  nextDateIsNavigable,
  previousDateIsNavigable,
  navigableMonth,
  fullName,
  summaryPackage,
}) {
  const router = useRouter();
  function navigateToGivenYear(y: number) {
    router.push(`/orgao/${id}/${y}`);
  }
  const pageTitle = `Dados/${id}`;
  return (
    <Page>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:image" content="/img/icon_dadosjus_background.png" />
        <meta
          property="og:title"
          content={`Veja os dados do orgão: ${fullName}`}
        />
        <meta
          property="og:description"
          content="DadosJusBr é uma plataforma que realiza a libertação continua de dados de remuneração de sistema de justiça brasileiro"
        />
      </Head>
      <Header />
      <Container>
        <AgencyWithNavigation
          data={data}
          id={id}
          year={year}
          agency={agency}
          dataLoading={false}
          nextDateIsNavigable={nextDateIsNavigable}
          previousDateIsNavigable={previousDateIsNavigable}
          title={fullName}
          navigableMonth={navigableMonth}
          setYear={navigateToGivenYear}
          summaryPackage={summaryPackage && summaryPackage}
        />
      </Container>
      <Footer />
    </Page>
  );
}
const Page = styled.div`
  background: #3e5363;
`;
export const getServerSideProps: GetServerSideProps = async context => {
  const { agency: id, year } = context.params;
  try {
    const { data: agency } = await api.ui.get(`/v1/orgao/totais/${id}/${year}`);
    return {
      props: {
        id,
        data: agency.MonthTotals ? agency.MonthTotals : [],
        year: parseInt(year as string, 10),
        agency: agency.Agency,
        nextDateIsNavigable:
          parseInt(year as string, 10) !== new Date().getFullYear(),
        previousDateIsNavigable: parseInt(year as string, 10) !== 2018,
        navigableMonth: agency.MonthTotals
          ? agency.MonthTotals[agency.MonthTotals.length - 1].Month
          : 1,
        fullName: agency.AgencyFullName,
        summaryPackage: agency.SummaryPackage || null,
      },
    };
  } catch (err) {
    context.res.writeHead(301, {
      Location: `/404`,
    });
    context.res.end();
    return {
      props: {},
    };
  }
};
const Container = styled.div`
  margin-top: 3rem;
`;
