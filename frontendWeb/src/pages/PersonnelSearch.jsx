import React, { Fragment } from "react";
import EmployeesCard from "../components/EmployeesCard";
import {   useSelector } from "react-redux";

const PersonnelSearch = () => {
    const state = useSelector((state) => state);
  return (
    <Fragment>
      <div id="personnel-list">
        <div className="flex-display navbar-personnel-list margin-horizontal-20">
          <div className="auto-margin margin-horizontal-20">
            <p className="title-page margin-0 color-blue">
              <b>FIND PERSONNEL</b>
            </p>
          </div>
        </div>
        <div className="flex-display flex-column">
          <div className="flex-display cards margin-horizontal-20">
            {state.Personnels.personnel.map((el, i) => {
              return <EmployeesCard personnels={el} key={i}></EmployeesCard>;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PersonnelSearch;
