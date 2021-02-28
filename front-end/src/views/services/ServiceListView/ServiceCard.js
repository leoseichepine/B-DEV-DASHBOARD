import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    makeStyles,
    List,
    ListItem,
    Button
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import UserProfile from './../../../UserProfile.js'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
        statsItem: {
        alignItems: 'center',
        display: 'flex'
    },
        statsIcon: {
        marginRight: theme.spacing(1)
    }
}));

const ProductCard = ({ className, service, ...rest }) => {
    const classes = useStyles();
    const [subscribed, setSubscribed] = useState(false);

    return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
        <CardContent>
            <Box display="flex" flexDirection='row' justifyContent='center'>
                <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h4"
                > {service.name[0].toUpperCase() + service.name.slice(1)} </Typography>
                <Button variant="contained" disableElevation onClick={() => {
                    if (subscribed === false) {
                        UserProfile.addService(service);
                        setSubscribed(true)
                    } else {
                        console.log('remove service..');
                        UserProfile.removeService(service);
                        setSubscribed(false)
                    }
                }}>{(subscribed ? 'Unsubscribe' : 'Subscribe')}</Button>
            </Box>

            <Typography
            align="center"
            color="textPrimary"
            variant="body1"
            > Service description </Typography>

            <Typography
            align="center"
            color="textPrimary"
            variant="body1"
            > {service.widgets.length + (service.widgets.length == 1 ? ' Widget ' : ' Widgets ') + 'available.'} </Typography>

            {/* Widget */}
            {subscribed ? service.widgets.map((element, index) => {
                return <ul key={index}>
                    <List>
                        <ListItem>
                            <Button variant="contained" disableElevation>Add widget</Button>
                            {element.name}: {element.description}
                        </ListItem>
                    </List>
                </ul>
            }): ''}

        </CardContent>

        <Box flexGrow={1} />

        <Divider />

        <Box p={2}>
            <Grid
            container
            justify="space-between"
            spacing={2}
            >
                <Grid
                    className={classes.statsItem}
                    item
                >
                    <AccessTimeIcon
                    className={classes.statsIcon}
                    color="action"
                    />
                    <Typography
                    color="textSecondary"
                    display="inline"
                    variant="body2"
                    > Updated 2hr ago </Typography>
                </Grid>
                <Grid
                    className={classes.statsItem}
                    item
                >
                    <GetAppIcon
                    className={classes.statsIcon}
                    color="action"
                    />
                    <Typography
                    color="textSecondary"
                    display="inline"
                    variant="body2"
                    >
                    {/*{product.totalDownloads}*/}
                    {' '}
                    Downloads
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </Card>
    );
};

ProductCard.propTypes = {
    className: PropTypes.string,
    service: PropTypes.object.isRequired
};

export default ProductCard;
