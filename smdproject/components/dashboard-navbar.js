import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { AppBar, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { IconName } from "react-icons/fa";

import profilePic from "../public/static/logoOne.png";

const dataList = [
  {
    id: 1,
    icon: <PhoneInTalkIcon className={styles.iconcontect} />,
    title: "PHONE NUMBER",
    value: "080-852-6888",
  },
  {
    id: 2,
    icon: <FmdGoodIcon className={styles.iconcontect} />,
    title: "CONTACT ADDRESS",
    value: "เขตบางขุนเทียน กทม",
  },
  {
    id: 3,
    icon: <EmailIcon className={styles.iconcontect} />,
    title: "EMAIL",
    value: "SAMAEDAM.GMAIL.COM",
  },
];

const manu = [
  {
    id:1,
    title: "HOME"
  },
  {
    id:2,
    title: "ABOUT"
  },
  {
    id:3,
    title: "CATEGORY"
  },
  {
    id:4,
    title: "CONTACT"
  }
]

export function DashoboardNavbar(props) {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          <Image
            src={profilePic}
            alt="Picture of the author"
            className={styles.logo}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className={styles.logoname}
          >
            SMD SECURITY CO. LTD.
          </Typography>
          {dataList.map((data) => (
            <Box key={data.id} className={styles.boxcontact}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>{data.icon}</Grid>
                <Grid item xs sx={{ padding: "10px" }}>
                  <Typography sx={{ fontSize: "24px", fontFamily: "Rancho" }}>
                    {data.title}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", fontFamily: "Rancho" }}>
                    {data.value}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Box sx={{ flexGrow: 1 }} className={styles.boxmanu}>
              <a className={styles.textmanu}> HOME </a>
              <a className={styles.textmanu}> ABOUT </a>
              <a className={styles.textmanu}> CATEGORY </a>
              <a className={styles.textmanu}> CONTACT </a>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
