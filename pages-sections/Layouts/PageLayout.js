import React from 'react'

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPage.js";

const useStyles = makeStyles(styles);
function PageLayout(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
      <Header
        color="dark"
        routes={[]}
        brand="VBC Group"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
        { props.children}
        <Footer />
        </div>
    )
}

export default PageLayout
