import { container, title } from "../../nextjs-material-kit";

import imagesStyle from "../../nextjs-material-kit/imagesStyles";

import modalStyle from "../../nextjs-material-kit/modalStyle";

const profilePageStyle = {
  container,
  ...modalStyle,
  profile: {
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "840px",
    color: "#737373",
    textAlign: "center !important",
    fontWeight: "500",
    paddingBottom: "1em"
  },
  name: {
    marginTop: "-80px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#737373",
    fontWeight: "500"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
};

export default profilePageStyle;
