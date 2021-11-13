import React from 'react'

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection'
import Parallax from "../components/Parallax/Parallax.js";
import Head from "next/head";

import styles from "../styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

function ContactPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>
            <Head>

          <title>Contact Us - Vbc Group | Building your visions, creating reality. | Vbc Projects | Faridabad | Architects | Interior Design | Construction</title>
        </Head>
        <Parallax small filter image="/img/landing-bg.jpg" />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <WorkSection />
        </div>
        </div>
    )
}

export default ContactPage
