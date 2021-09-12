import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  grow: { flexGrow: 1  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    padding: '.5rem'
  },
  title: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



export default useStyles;