import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1613918108466-292b78a8ef95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageBox: {
    margin: "15% 30% 15% 15%",
  },
  imageTypo: {
    fontSize: "42px",
  },
  imageBtn: {
    marginTop: theme.spacing(3),
  }
}));

export default useStyles;
