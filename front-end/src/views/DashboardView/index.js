import React from 'react';
import {
    Container,
    makeStyles
} from '@material-ui/core';
import Page from '../../components/Page';
import Widgets from "./Widgets";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Dashboard"
        >
            <Container maxWidth={false}>
                <Widgets/>
            </Container>
    </Page>
  );
};

export default Dashboard;
