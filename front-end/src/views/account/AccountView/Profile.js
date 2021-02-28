import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Typography,
	makeStyles,
} from "@material-ui/core";
import UserProfile from "./../../../UserProfile.js";

const useStyles = makeStyles(() => ({
	root: {},
	avatar: {
		height: 100,
		width: 100,
	},
}));

const Profile = ({ className, ...rest }) => {
	const classes = useStyles();

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardContent>
				<Box alignItems="center" display="flex" flexDirection="column">
					<Avatar className={classes.avatar} src={UserProfile.getPicture()} />

					<Typography color="textPrimary" gutterBottom variant="h3">
						{" "}
						{UserProfile.getFirstName() + " " + UserProfile.getLastName()}{" "}
					</Typography>

					<Typography color="textSecondary" variant="body1">
						{" "}
						{UserProfile.getEmail()}{" "}
					</Typography>

					<Typography
						className={classes.dateText}
						color="textSecondary"
						variant="body1"
					>
						{" "}
						{`${moment().format("hh:mm A")}`}{" "}
					</Typography>
				</Box>
			</CardContent>

			{/* <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions> */}
		</Card>
	);
};

Profile.propTypes = {
	className: PropTypes.string,
};

export default Profile;
