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
          <p className={classes.description}>Write us your queries and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </p>
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
          <h4 style={{ color: "black" }}><strong>Contact No : </strong><a style={{ color: "black" }} href="tel:9899844647"><strong>9899844647</strong></a>, <a style={{ color: "black" }} href="tel:9841444447"><strong>9841444447</strong></a>, <a style={{ color: "black" }} href="tel:01292974647"><strong>0129-2974647</strong></a></h4>
        </GridItem>
        <GridItem className={classes.description} cs={12} sm={12} md={8}>
          <h4 style={{ color: "black" }}><strong>Email : </strong><a style={{ color: "black" }} href="mailto:bijjichauhan@gmail.com"><strong>bijjichauhan@gmail.com</strong></a></h4>
        </GridItem>
        <GridItem className={classes.description} cs={12} sm={12} md={8}>
          <h4 style={{ color: "black" }}><strong>Addresses </strong><address style={{ color: "black" }}>
            <strong>
            Head Office: 5B second floor, I Block, Sector 10, OPP. District Court, Faridabad, Haryana, 121006
            </strong>
            </address>
            <address style={{ color: "black" }}>
            <strong>
            Office: 1130, Sector 2, Faridabad, Haryana
            </strong>
            </address>
            <address style={{ color: "black" }}>
            <strong>
            Office: Plot No 26, Dividing Road, Sector 65, Faridabad, Haryana
            </strong>
            </address>
            </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
