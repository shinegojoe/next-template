import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default function ButtonAppBar() {
  // const classes = useStyles();

  return (
    <div>
      <div >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
         

            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/page1">
              <a>Page 1</a>
            </Link>

            <Link href="/page2">
              <a>Page 2</a>
            </Link>

            <Link href="/dynamic/page1">
              <a>dynamic router</a>
            </Link>

            <Link href="/items">
              <a>items page</a>
            </Link>

            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
