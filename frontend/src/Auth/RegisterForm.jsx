import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../State/Auth/Action";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store);

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt])

  const handleSubmit = (event) => {
    event.preventDefault()

    const data=new FormData(event.currentTarget);
    const userData={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      email:data.get("email"),
      password:data.get("password")
    }
    dispatch(register(userData))
    console.log(userData);
  };
  return (
    <div>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", margin:"39px" }}>
          
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="password"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: "0.8rem 0", bgcolor:"#EE4266", ":hover": {
                    bgcolor: "#FF407D",
                    color: "white"
                  }}}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
            <div className="py-3 flex items-center">
              <p>If you have already an account</p>
              <Button
                onClick={() => navigate("/login")}
                className="ml-5"
                size="small"
                sx={{ color:"#EE4266"}}
              >
                Login
              </Button>
            </div>
          </div>

        </Box>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          src="https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Card>
    </div>
  );
};

export default RegisterForm;
