import React, { useEffect, useState, Fragment } from "react";
import EmployeesCard from "../components/EmployeesCard";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const PersonnelList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const [personnels, setPersonnels] = useState([]);
 

  useEffect(() => {
    const fetchPersonnels = () => {
      Axios.get("https://randomuser.me/api/?results=28")
        .then(({ data }) => {
          setPersonnels(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPersonnels();
  }, []);

  const click = (event) => {
    dispatch({
      type: "SET_SEARCH",
      payload: event.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!state.Personnels.search) {
      dispatch({
        type: "SET_ALERT",
        payload: { msg: "Must be filled.", alertType: "empty" },
      });
    } else {
      let result = personnels.filter((el) => {
        return (
          el.name.first.toLowerCase() === state.Personnels.search.toLowerCase()
        );
      });
      if (result.length === 0) {
        dispatch({
          type: "SET_ALERT",
          payload: { msg: "Personnel not found", alertType: "Not Found" },
        });
      } else {
        dispatch({
          type: "REMOVE_ALERT",
        });
        dispatch({
          type: "SET_PERSONNEL",
          payload: result,
        });
        history.push("/personnels-search");
      }
    }
  };

  const lastPage = Math.ceil(personnels.length / state.Page.personnelsPerPage);
  const previousPage = () => {
    if (state.Page.currentPage === 2) {
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.currentPage - 1,
      });
      dispatch({
        type: "SET_PREVIOUS_PAGE_BUTTON",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.currentPage - 1,
      });
      dispatch({
        type: "SET_NEXT_PAGE_BUTTON",
        payload: false,
      });
    }
  };

  const nextPage = () => {
    if (state.Page.currentPage === lastPage - 1) {
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.currentPage + 1,
      });
      dispatch({
        type: "SET_NEXT_PAGE_BUTTON",
        payload: true,
      });
    } else {
      dispatch({
        type: "SET_CURRENT_PAGE",
        payload: state.Page.currentPage + 1,
      });
      dispatch({
        type: "SET_PREVIOUS_PAGE_BUTTON",
        payload: false,
      });
    }
  };

  const indexOfLastPersonnel = state.Page.currentPage * state.Page.personnelsPerPage;
  const indexOfFirstPersonnel = indexOfLastPersonnel - state.Page.personnelsPerPage;
  const currentPersonnels = personnels.slice(
    indexOfFirstPersonnel,
    indexOfLastPersonnel
  );
  return (
    <Fragment>
      <div id="personnel-list">
        <div className="flex-display navbar-personnel-list margin-horizontal-20">
          <div className="auto-margin margin-horizontal-20">
            <p className="title-page margin-0 color-blue">
              <b>PERSONNEL LIST</b>
            </p>
            <p className="margin-0">List of all personnels</p>
          </div>
          <div className="auto-margin margin-horizontal-20 flex-display">
            <form
              className="flex-display form-search"
              onSubmit={(e) => onSubmit(e)}
            >
              <input
                id="search-personnel"
                className="search-personnel margin-0"
                placeholder="find personnel"
                onChange={(e) => click(e)}
              />
              <button type="submit" className="margin-0 color-blue">
                <IoIosSearch />
              </button>
            </form>
            <button className="button-add-personnel margin-horizontal-20">
              Add Personnel
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className="error flex-between flex-display">
          <div className="empty"></div>
          <Error></Error>
        </div>
        <div className="flex-display flex-column screen-cards">
          <div className="flex-display cards margin-horizontal-20">
            {currentPersonnels.map((el, i) => {
              return <EmployeesCard personnels={el} key={i}></EmployeesCard>;
            })}
          </div>
          <div className="flex-display auto-margin">
            <button
              className="button-guide-click"
              disabled={state.Page.previousPageButton}
              onClick={() => previousPage()}
            >
              <IoIosArrowBack />
              Previous Page
            </button>
            <button
              className="button-guide-click"
              disabled={state.Page.nextPageButton}
              onClick={() => nextPage()}
            >
              Next Page
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PersonnelList;
