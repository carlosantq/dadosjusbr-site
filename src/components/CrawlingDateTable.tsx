import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MONTHS from '../@types/MONTHS';

function TableRow(props) {
  const { month, crawlingtimeseconds } = props;
  const d = new Date(crawlingtimeseconds * 1000);
  return (
    <tr>
      <td width={80} align="left">
        {MONTHS[month]}
      </td>
      <td align="right">
        {d.getDate()} de {MONTHS[d.getMonth() + 1]} de {d.getFullYear()}
      </td>
    </tr>
  );
}

const CrawlingDateTable: React.FC<{
  data;
  dataLoading;
}> = ({ data, dataLoading }) => (
  <div>
    {dataLoading ? (
      <Box
        m={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <CircularProgress color="info" />
        </div>
        <p>Aguarde...</p>
      </Box>
    ) : (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Datas de realização das coletas dos dados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.length > 0 ? (
            <Box>
              <table>
                {data.map(d => (
                  <TableRow
                    month={d.Month}
                    crawlingtimeseconds={d.CrawlingTimestamp.seconds}
                  />
                ))}
              </table>
            </Box>
          ) : (
            <></>
          )}
        </AccordionDetails>
      </Accordion>
    )}
  </div>
);

export default CrawlingDateTable;
