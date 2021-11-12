import React from "react";
import Link from "next/link";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Button from "../components/CustomButtons/Button.js";
import Parallax from "../components/Parallax/Parallax.js";


import styles from "../styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Building your visions, creating reality</h1>
              <h4>
                We are leaders in architects, interior design and construction work.
              </h4>
              <br />
              <Link href="/contact">
              <Button
                color="warning"
                size="lg"
                href="/contact"
                rel="noopener noreferrer"
              >
                Lets Discuss
              </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
