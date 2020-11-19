import React, { useEffect, useContext } from "react";
import clsx from "clsx";
import { AppContext } from "../../../App";
import "../homepage.css";
import {
  Container,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  makeStyles,
  CardHeader,
  Button,
} from "@material-ui/core";

import Particles from "react-tsparticles";
import { blue } from "@material-ui/core/colors";
import ArmChart from "./armchart";
import Background from "../../../pages/homepage/images/header-middle-bg.png";
import Backgroundsecond from "../../../pages/homepage/images/header-middle-bg1.png";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  mobileIntrolarge: {
    width: "-webkit-fill-available",
  },
  mobileIntro: {
    width: "-webkit-fill-available",
  },
  introcolor: {
    color: theme.palette.getContrastText("#ef6c00"),
  },
  image: {
    height: "20em",
    transform: "rotate3d(1, -1, 0, 60deg)",
  },
  imagemoile: {
    height: "16em",
  },
  intro: {
    paddingTop: "40px",
    zIndex: 1,
    position: "relative",
  },
  header: {
    background: `url(${Background}) center no-repeat, url(${Backgroundsecond}) center bottom no-repeat`,
    height: "600px",
  },
  toolbar: theme.mixins.toolbar,
  space: {
    flexGrow: 1,
  },
}));
function IntroHeader() {
  const classes = useStyles();

  const { darktheme, setDarktheme } = useContext(AppContext);
  useEffect(() => {}, []);

  return (
    <div className={classes.header}>
      <div className={classes.toolbar} />
      <Particles
        // height="50px"
        // height={useMediaQuery(useTheme().breakpoints.up("sm")) ? "80%" : "85%"}
        style={{ position: "absolute", opacity: 0.8 }}
        id="tsparticles"
        options={{
          background: {
            /* color: {
              value: blue[800],
            }, 
            image: `url(${Background})`,

            size: "100% 100%",
            repeat: "no-repeat",
            position: "center bottom",
            */
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className={classes.intro}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt={3}
                className={classes.introtext}
              >
                <Typography variant="h4" align="left">
                  INVEST WITH BITCOIN
                </Typography>
                <Typography variant="h6" align="left">
                  World's best cloud investment platform
                </Typography>
              </Box>
              <Box mt={3}>
                <Typography variant="h6" align="center">
                  We sincerely hope that coininvest.net Investment Limited will
                  become a partner in your life.
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() =>
                    navigate("https://https://admin-fa3ba.firebaseapp.com")
                  }
                >
                  GET STARTED
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <ArmChart />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default IntroHeader;
