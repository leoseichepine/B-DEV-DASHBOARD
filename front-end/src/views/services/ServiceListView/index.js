import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import ProductCard from './ServiceCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    productCard: {
        height: '100%'
    }
}));

const ProductList = () => {
    const classes = useStyles();
    const [services, setService] = useState(data);

    return (
    <Page
      className={classes.root}
      title="Services"
    >
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {services.map((s, index) => (
              <Grid
                item
                key={index}
                lg={4}
                md={6}
                xs={12}
            >
                <ProductCard
                  className={classes.productCard}
                  service={s} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box> */}

      </Container>
    </Page>
  );
};

export default ProductList;
