import React, { useState } from "react";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, getActiveElement } from "formik";
import {
	Box,
	Button,
	Container,
	Link,
	TextField,
	Typography,
	makeStyles,
} from "@material-ui/core";
import Page from "./../../components/Page";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		height: "100%",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const RegisterView = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	const [formError, setFormError] = useState(false);
	const [userCreated, setUserCreated] = useState(false);

	return (
		<Page className={classes.root} title="Register">
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
							firstName: "",
							lastName: "",
							password: "",
						}}
						validationSchema={Yup.object().shape({
							firstName: Yup.string()
								.max(255)
								.required("First name is required"),
							lastName: Yup.string().max(255).required("Last name is required"),
							email: Yup.string()
								.email("Must be a valid email")
								.max(255)
								.required("Email is required"),
							password: Yup.string().max(255).required("password is required"),
						})}
						onSubmit={(values) => {
							axios
								.post(
									"http://localhost:8080/user/register",
									{
										firstName: values.firstName,
										lastName: values.lastName,
										email: values.email,
										password: values.password,
										services: [],
									},
									{ headers: { "Content-Type": "application/json" } }
								)
								.then((res) => {
									setFormError(false);
									setUserCreated(true);
								})
								.catch((err) => {
									setFormError(true);
									setUserCreated(false);
									console.log("Error catched: " + err);
								});
						}}
					>
						{({
							errors,
							handleBlur,
							handleChange,
							handleSubmit,
							isSubmitting,
							touched,
							values,
						}) => (
							<form onSubmit={handleSubmit}>
								{/* Form title */}
								<Box mb={3}>
									<Typography color="textPrimary" variant="h2">
										{" "}
										Create new account{" "}
									</Typography>
									<Typography
										color="textSecondary"
										gutterBottom
										variant="body2"
									>
										{" "}
										Use your email to create new account{" "}
									</Typography>
								</Box>

								{/* First Name */}
								<TextField
									error={Boolean(touched.firstName && errors.firstName)}
									fullWidth
									helperText={touched.firstName && errors.firstName}
									label="First name"
									margin="normal"
									name="firstName"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.firstName}
									variant="outlined"
								/>

								{/* Last Name */}
								<TextField
									error={Boolean(touched.lastName && errors.lastName)}
									fullWidth
									helperText={touched.lastName && errors.lastName}
									label="Last name"
									margin="normal"
									name="lastName"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.lastName}
									variant="outlined"
								/>

								{/* Email */}
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

								{/* Password */}
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

								{/* Sign up button */}
								<Box my={2}>
									{formError ? (
										<Typography className="onError">
											Account creation failed.
										</Typography>
									) : (
										""
									)}
									{userCreated ? (
										<Typography className="onError">
											Account created, you can now sign in.
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
										Sign up now{" "}
									</Button>
								</Box>

								{/* Sign in link */}
								<Typography color="textSecondary" variant="body1">
									{" "}
									Have an account?{" "}
									<Link component={RouterLink} to="/login" variant="h6">
										{" "}
										Sign in{" "}
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

export default RegisterView;
