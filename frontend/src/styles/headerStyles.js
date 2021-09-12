import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "150rem",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1613918108466-292b78a8ef95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageBox: {
    width: "40%",
    marginLeft: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-start",

  },
  imageTypo: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
    fontSize: "25px",
  },
  imageBtn: {
    margin: theme.spacing(1),
    fontSize: "12px",
  }
}));

export default useStyles;