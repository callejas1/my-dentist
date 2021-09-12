import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  typography: {
    paddingTop: theme.spacing(10),
  },
  typo2: {
    paddingTop: theme.spacing(3),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function Album({ dentists }) {
  const classes = useStyles();

  return (
    <>
      <Container >
        <Grid item xs={12} md={12} lg={12} className={classes.typography}>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            color="textPrimary"
          >
            My Dentist
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} className={classes.typo2}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            A professional and experienced dental team is available at our practice The Netherlands. You can come to us with your whole family, in addition to the regular check-up you can also contact us for almost all dental treatments (beauty procedures, general treatments). 

            You can come by during office hours on weekdays. To make an appointment you can register directly.
          </Typography>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {dentists && dentists.map((dentist) => (
            <Grid item key={dentist.name} xs={12} sm={6} md={6} lg={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={dentist.url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {dentist.name}
                  </Typography>
                  <Typography>
                    {dentist.resourceTitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
