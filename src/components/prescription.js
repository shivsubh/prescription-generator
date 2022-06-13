import React from "react";

const Prescription = (props) => {
  const { age, date, gender, medicines, notes, username } = props;
  return (
    <div className="page">
      <section id="hospital">
        <h1>{"NAME OF THE HOSPITAL"}</h1>
        <div className="dr-dt">
          <h3 className="fs-1_5">{"Dr. John Killer "}</h3>
          <span className="fs-0_3">{"M.B.B.S., M.S. (Ortho)"}</span>
        </div>
        <p>
          751 Victoria 123 Street, South Statue 204
          <br />
          Hometown, US 1234 <br />
          PH: (207)808 2014 2014 <br />
          FAX: (207)808 2015 2202
        </p>
      </section>
      <hr />
      <section id="prescription">
        <div className="d-flex end">
          <label>{"S.No. : "}</label>
          <input type="text" value={new Date().valueOf()} disabled />
        </div>
        <div className="d-flex space">
          <div className="gm">
            <label>{"Patient's Name : "}</label>
            <input type="text" className="w-17" value={username} disabled />
          </div>
          <div>
            <label>{"Age : "}</label>
            <input type="text" className="w-5" value={age} disabled />
          </div>
          <div>
            <label>{"Gender : "}</label>
            <input type="text" className="w-5" value={gender} disabled />
          </div>
        </div>
        <div className="d-flex space">
          <div>
            <label>{"Medical Notes : "}</label>
            <input type="text" className="w-17" value={notes} disabled />
          </div>
          <div>
            <label>{"Date : "}</label>
            <input type="text" className="w-14" value={date} disabled />
          </div>
        </div>
        <div className="d-flex col">
          <label>{"Medicine Details : "}</label>
          <textarea disabled defaultValue={medicines}></textarea>
        </div>
        <div className="d-flex end">
          <label>{"Doctor's Signature : "}</label>
          <input type="text" disabled />
        </div>
      </section>
      <hr />
      <section id="footer">
        <footer>
          <a href="mailto:#">support@hospital.com</a>
        </footer>
      </section>
    </div>
  );
};

export default Prescription;
