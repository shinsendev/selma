import React from "react";
import { Paper, Typography, Tooltip } from "@material-ui/core";
import GetAppIcon from '@material-ui/icons/GetApp';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SelmaTheme from "../logic/SelmaTheme";

const DownloadBox = () => {

  const theme = SelmaTheme();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginBottom: "1rem",
        paddingBottom: "1rem"
      },

      container: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      },

      item: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "1rem 3rem",
        cursor: "pointer",
        '&:hover': {
          color: theme.palette.primary.main
        }
      },
    })
  );

  const styles = useStyles();
  const tooltipText = 'Download all data of the MC² Database in one file';

  return (
    <Paper elevation={0} className={styles.root}>
        <Typography variant="h4">Download entire dataset</Typography>
        <Tooltip title={tooltipText} aria-label="download">
            <div className={styles.container}>
              <a href="https://mc3-website.s3.eu-west-3.amazonaws.com/data/last_export.json" download><div className={styles.item}><GetAppIcon/>JSON</div></a>
              <a href="https://mc3-website.s3.eu-west-3.amazonaws.com/data/last_export.csv" download><div className={styles.item}><GetAppIcon/>CSV</div></a>
              </div>
        </Tooltip>
    </Paper>
  )
}

export default DownloadBox;