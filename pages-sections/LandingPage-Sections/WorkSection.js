import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form> */}
        </GridItem>

        <GridItem className={classes.description} cs={12} sm={12} md={8}>
          <h4 style={{ color: "black" }}><strong>Contact No : </strong><a style={{ color: "black" }} href="tel:9899844647"><strong>9899844647</strong></a>, <a style={{ color: "black" }} href="tel:9841444447"><strong>9841444447</strong></a></h4>
        </GridItem>
        <GridItem className={classes.description} cs={12} sm={12} md={8}>
          <h4 style={{ color: "black" }}><strong>Email : </strong><a style={{ color: "black" }} href="mailto:webmaster@example.com"><strong>webmaster@example.com</strong></a></h4>
        </GridItem>
        <GridItem className={classes.description} cs={12} sm={12} md={8}>
          <h4 style={{ color: "black" }}><strong>Address : </strong><address style={{ color: "black" }}>
            <strong>
            Box 564, Disneyland, USA
            </strong>
            </address></h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
