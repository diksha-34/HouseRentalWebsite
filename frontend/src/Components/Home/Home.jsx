import React, { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Pagination,
} from "@mui/material";
import { findHouseByLocationAndPrice } from "../../State/House/Action";
import { useNavigate, useLocation } from "react-router-dom";
import HouseCard from "./HouseCard";
import { useSelector, useDispatch } from "react-redux";
import AuthModal from "../../Auth/AuthModel";

const currencies = [
  { value: "1", label: "1000-20000" },
  { value: "2", label: "20000-40000" },
  { value: "3", label: "40000-60000" },
  { value: "4", label: "60000-80000" },
  { value: "5", label: "80000-105000" },
];

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const pageNumber = parseInt(searchParams.get("page")) || 1; // Parse page number to integer

  const [searchQuery, setSearchQuery] = useState({
    city: "",
    price: "",
  });
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [showNoHousesMessage, setShowNoHousesMessage] = useState(false);

  const { houses, auth } = useSelector((state) => state);

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
  }, [auth.user]);

  const handleSearch = (e) => {
    e.preventDefault();
    const selectedCurrency = currencies.find(
      (currency) => currency.value === searchQuery.price
    );
    const [minPrice, maxPrice] = selectedCurrency.label
      .split("-")
      .map((price) => parseInt(price));

    dispatch(
      findHouseByLocationAndPrice({
        ...searchQuery,
        minPrice,
        maxPrice,
        pageNumber: 1, // Reset to page 1 every time you search
        pageSize: 9,
      })
    );

    const searchParam = new URLSearchParams(location.search);
    searchParam.set("page", 1);
    const query = searchParam.toString();
    navigate({ search: `?${query}` });

    setShowNoHousesMessage(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchQuery({
      ...searchQuery,
      [name]: value,
    });
  };

  const handlePaginationChange = (event, value) => {
    let newPageNumber;
    if (value === "prev") {
      newPageNumber = Math.max(1, pageNumber - 1);
    } else if (value === "next") {
      newPageNumber = Math.min(houses.houses?.totalPages || 1, pageNumber + 1);
    } else {
      newPageNumber = value;
    }
  
    const selectedCurrency = currencies.find(
      (currency) => currency.value === searchQuery.price
    );
    const [minPrice, maxPrice] = selectedCurrency.label
      .split("-")
      .map((price) => parseInt(price));
  
    const searchParam = new URLSearchParams(location.search);
    searchParam.set("page", newPageNumber);
    const query = searchParam.toString();
    navigate({ search: `?${query}` });
  
    dispatch(
      findHouseByLocationAndPrice({
        ...searchQuery,
        minPrice,
        maxPrice,
        pageNumber: newPageNumber,
        pageSize: 9,
      })
    );
  };
  

  return (
    <>
      <div className="bg-[url('https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover w-full h-full">
        <br />
        <br />
        <br />
        <Navigation />
        <div className="text-center mt-40 mb-16 font-bold text-white text-[30px] md:text-[50px] md:mt-40">
          Find Your Suitable Rental House
        </div>
        <div className="container mx-auto bg-white p-7 mb-10 items-center flex justify-center max-w-xs md:max-w-4xl md:p-3">
          <Grid item>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your budget"
              sx={{ margin: "20px" }}
              onChange={handleInputChange}
              value={searchQuery.price}
              name="price"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Location"
              id="outlined-start-adornment"
              sx={{ margin: "20px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleInputChange}
              value={searchQuery.city}
              name="city"
            />
            <Button
              variant="contained"
              size="large"
              color="success"
              sx={{ padding: "15px 40px", margin: "20px" }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </div>
        <div className="text-white text-right mr-4 font-semibold text-md">
          <h4>Scroll Down</h4>
          <p>To discover more</p>
        </div>
      </div>
      <div className="bg-white py-24 md:py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl md:text-[50px] font-bold tracking-tight text-gray-900 sm:text-4xl">
              Properties
            </h1>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {Array.isArray(houses.houses?.content) && houses.houses.content.length > 0 ? (
              houses.houses.content.map((item) => (
                <HouseCard key={item.id} house={item} setOpenAuthModal={setOpenAuthModal} />
              ))
            ) : (
              showNoHousesMessage && <p className="text-center">No houses are available at this particular location</p>
            )}
          </div>
        </div>
      </div>
      {houses.houses?.totalPages > 1 && (
        <section>
          <div className="px-4 py-5 flex justify-center">
            <Pagination
              count={houses.houses?.totalPages || 0}
              page={pageNumber}
              onChange={(event, value) => handlePaginationChange(event, value)}
              color="success"
            />
          </div>
        </section>
      )}
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </>
  );
};

export default Home;
