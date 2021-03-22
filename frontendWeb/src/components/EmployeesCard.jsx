import React from "react";
import { FaEllipsisH } from "react-icons/fa";

const EmployeesCard = ({personnels}) => {

  return (
    <>
    <div className="card">
      <div className="flex-display box-title-card margin-10">
        <div className="flex-display">
          <p className="margin-0 title-card">Personal ID:</p>
          <p className="color-blue title-card margin-0">
            {personnels.id.value}
          </p>
        </div>
        <button className="button-none">
          <FaEllipsisH />
        </button>
      </div>
      <div className="flex-display padding">
        <img
          className="avatar"
          src={personnels.picture.medium}
          alt={personnels.name.first}
        ></img>
      </div>
      <div className="margin-10">
        <p className="margin-0">
          <b>name</b>
        </p>
        <p className="margin-0">{personnels.name.first} {personnels.name.last}</p>
      </div>
      <div className="margin-10">
        <p className="margin-0">
          <b>telepon</b>
        </p>
        <p className="margin-0">{personnels.phone}</p>
      </div>
      <div className="margin-10">
        <p className="margin-0">
          <b>birthday</b>
        </p>
        <p className="margin-0">
          {personnels.dob.date.toString().slice(0, 10)}
        </p>
      </div>
      <div className="margin-10">
        <p className="margin-0">
          <b>email</b>
        </p>
        <p className="margin-0">{personnels.email}</p>
      </div>
    </div>
    </>
  );
};
export default EmployeesCard;
