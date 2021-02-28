import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import UserProfile from "./../../UserProfile.js";
import {
	Box,
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography,
	makeStyles,
} from "@material-ui/core";
import FacebookIcon from "./../../icons/Facebook";
import GoogleIcon from "./../../icons/Google";
import Page from "./../../components/Page";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		height: "100%",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const LoginView = (props) => {
	const classes = useStyles();
	const [formError, setFormError] = useState(false);

	const facebookResponse = (res) => {
		var name = res.name;
		var firstName = name.split(" ")[0];
		var lastName = name.split(" ")[1];
		var email = res.email;
		var pass = res.id;
		var token = res.accessToken;
		var picture = res.picture.data.url;

		axios
			.post(
				"http://localhost:8080/user/authenticate",
				{ username: email, password: pass },
				{ headers: { "Content-Type": "application/json" } }
			)
			.then((res) => {
				UserProfile.connectUser(
					res.data.firstName,
					res.data.lastName,
					res.data.email,
					res.data.picture || "",
					res.data.token,
					res.data.services
				);
				setFormError(false);
				props.loginHandler(true);
			})
			.catch((err) => {
				console.log("err = " + err);
				console.log("registering...");

				var data = "";

				axios
					.post(
						"http://localhost:8080/user/register",
						{
							firstName: firstName,
							lastName: lastName,
							email: email,
							password: pass,
							picture: picture,
							services: [],
						},
						{ headers: { "Content-Type": "application/json" } }
					)
					.then((res) => {
						data = res.data;

						axios
							.post(
								"http://localhost:8080/user/authenticate",
								{ username: data.email, password: pass },
								{ headers: { "Content-Type": "application/json" } }
							)
							.then((res) => {
								UserProfile.connectUser(
									res.data.firstName,
									res.data.lastName,
									res.data.email,
									res.data.picture,
									res.data.token,
									res.data.services
								);
								setFormError(false);
								props.loginHandler(true);
							})
							.catch((err) => {
								console.log("err = " + err);
							});
					})
					.catch((err) => {
						console.log("err = " + err);
					});
			});
	};

	return (
		<Page className={classes.root} title="Login">
			<Box
				display="flex"
				flexDirection="column"
				height="100%"
				justifyContent="center"
			>
				<Container maxWidth="sm">
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validationSchema={Yup.object().shape({
							email: Yup.string()
								.email("Must be a valid email")
								.max(255)
								.required("Email is required"),
							password: Yup.string().max(255).required("Password is required"),
						})}
						onSubmit={(values) => {
							localStorage.clear();

							axios
								.post(
									"http://localhost:8080/user/authenticate",
									{ username: values.email, password: values.password },
									{ headers: { "Content-Type": "application/json" } }
								)
								.then((res) => {
									UserProfile.connectUser(
										res.data.firstName,
										res.data.lastName,
										res.data.email,
										res.data.picture,
										res.data.token,
										res.data.services
									);
									setFormError(false);
									props.loginHandler(true);
								})
								.catch((err) => {
									setFormError(true);
									console.log("Error catched: " + err);
								});
						}}
					>
						{({
							errors,
							handleBlur,
							handleChange,
							handleSubmit,
							touched,
							values,
						}) => (
							<form onSubmit={handleSubmit}>
								<Box mb={3}>
									<Typography color="textPrimary" variant="h2">
										{" "}
										Sign in{" "}
									</Typography>
									<Typography
										color="textSecondary"
										gutterBottom
										variant="body2"
									>
										{" "}
										Sign in to Epitech Dashboard{" "}
									</Typography>
								</Box>

								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<FacebookLogin
											fullWidth
											size="small"
											appId={"131568538504205"}
											autoLoad={false}
											fields="name,email,picture"
											callback={facebookResponse}
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										{/* <GoogleLogin
                        clientId={"1070225610576-d6cmetgbakfb9eru3rc3jdr7e5i1i3kq.apps.googleusercontent.com"}
                        buttonText="Login with google"

                        onSuccess={(res) => {
                            // Creer un user en DB?
                            localStorage.clear();
                            localStorage.setItem('token', res.id);
                            localStorage.setItem('email', res.profileObj.email)

                            localStorage.setItem('firstName', res.profileObj.givenName)
                            localStorage.setItem('lastName', res.profileObj.familyName)

                            localStorage.setItem('picture', res.profileObj.imageUrl)
                            // props.loginHandler(true);
                            // setFormError(false);
                        }}

                        onFailure={(res) => {
                            console.log(res);
                            setFormError(true);
                        }}

                        cookiePolicy={'single_host_origin'}
                    /> */}
									</Grid>
								</Grid>

								<Box mt={3} mb={1}>
									<Typography
										align="center"
										color="textSecondary"
										variant="body1"
									>
										{" "}
										or login with email address{" "}
									</Typography>
								</Box>

								<TextField
									error={Boolean(touched.email && errors.email)}
									fullWidth
									helperText={touched.email && errors.email}
									label="Email Address"
									margin="normal"
									name="email"
									onBlur={handleBlur}
									onChange={handleChange}
									type="email"
									value={values.email}
									variant="outlined"
								/>

								<TextField
									error={Boolean(touched.password && errors.password)}
									fullWidth
									helperText={touched.password && errors.password}
									label="Password"
									margin="normal"
									name="password"
									onBlur={handleBlur}
									onChange={handleChange}
									type="password"
									value={values.password}
									variant="outlined"
								/>

								<Box my={2}>
									{formError ? (
										<Typography className="onError">
											Unable to login.
										</Typography>
									) : (
										""
									)}
									<Button
										color="primary"
										fullWidth
										size="large"
										type="submit"
										variant="contained"
									>
										{" "}
										Sign in now{" "}
									</Button>
								</Box>

								<Typography color="textSecondary" variant="body1">
									Don&apos;t have an account?{" "}
									<Link component={RouterLink} to="/register" variant="h6">
										{" "}
										Sign up{" "}
									</Link>
								</Typography>
							</form>
						)}
					</Formik>
				</Container>
			</Box>
		</Page>
	);
};

export default LoginView;
