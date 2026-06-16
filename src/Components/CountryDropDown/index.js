import React, { useContext, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const { countryList, selectedCountry, setSelectedCountry } =
    useContext(MyContext);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCountryTab, setSelectedCountryTab] = useState(null);
  const [filteredCountryList, setFilteredCountryList] = useState([]);

  useEffect(() => {
    setFilteredCountryList(countryList);
  }, [countryList]);

  const selectCountry = (index, country) => {
    setSelectedCountryTab(index);
    setSelectedCountry(country);
    setIsOpenModal(false);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) =>
        item.country.toLowerCase().includes(keyword),
      );

      setFilteredCountryList(list);
    } else {
      setFilteredCountryList(countryList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="location-label">Your Location</span>

          <span className="name">
            {selectedCountry !== ""
              ? selectedCountry.length > 10
                ? `${selectedCountry.substring(0, 10)}...`
                : selectedCountry
              : "Select Location"}
          </span>
        </div>

        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4>Choose Your Location</h4>

        <p>
          Enter your address and we will specify the offer for your location.
        </p>

        <Button
          className="closeModelLocation"
          onClick={() => setIsOpenModal(false)}
        >
          <IoCloseSharp />
        </Button>

        <div className="headerSearch w-100">
          <input
            type="text"
            className="headerSearchInput"
            placeholder="Search Your Area..."
            onChange={filterList}
          />

          <Button type="button">
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {filteredCountryList?.length > 0 &&
            filteredCountryList.map((item, index) => (
              <li key={`${item.country}-${index}`}>
                <Button
                  type="button"
                  onClick={() => selectCountry(index, item.country)}
                  className={selectedCountryTab === index ? "active" : ""}
                >
                  {item.country}
                </Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
