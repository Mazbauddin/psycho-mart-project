import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [selectedCountryTab, setSelectedCountryTab] = useState(null);

  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedCountryTab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  };

  useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="location-label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />{" "}
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        className="locationModel"
        slots={{
          transition: Transition,
        }}
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
          <Button>
            <IoIosSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${
                      selectedCountryTab === index ? "active" : ""
                    }`}
                  >
                    {item.country}{" "}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
