import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import {
  Box,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { firestore, collectionData } from "../../../../config";
import { formatLocaleCurrency } from "country-currency-map/lib/formatCurrency";
import { AppContext } from "../../../../App";
import { reactLocalStorage } from "reactjs-localstorage";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 400,
    marginTop: "10px"
  },
});

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      // Purple and green play nicely together.
      main: red[900],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#fff",
    },
    /*  background: {
      default: "#fff",
    }, */
    action: {
      selected: "#2196f33d",
    },
  },
});

export default function DepositTable() {
  const classes = useStyles();
  const { transactiondatas } = useContext(AppContext);
  const [deposits, setDeposits] = React.useState([]);
  const currency = reactLocalStorage.getObject("country").currencycode;

  useEffect(() => {
    /*   const alldeposits = firestore
      .collection("transactions")
      .where("type", "==", "wallet deposit")
      .where("pending", "==", false)
      .orderBy("timestamp", "desc");
    collectionData(alldeposits, "id").subscribe((data) => {
      const newDeposits = data.slice(0, 5);
      setDeposits(newDeposits);
    }); */

    const currentDeposits = transactiondatas.filter((el) => {
      return el.type == "wallet deposit";
    });
    setDeposits(currentDeposits);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TableContainer className={classes.container}>
        <Table aria-label="sticky table">
          <TableBody>
            {deposits.slice(0, 5).map((dep, index) => (
              <TableRow role="checkbox" tabIndex={-1} key={index}>
                <TableCell align="left" colSpan={2}>
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h6">{`${dep.name}`}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h5" color="primary">
                    {formatLocaleCurrency(dep.amount, currency, {
                      autoFixed: false,
                    })}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
