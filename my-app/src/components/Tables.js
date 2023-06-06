import React from "react";
import BodyForm from "./BodyForm";

export default function Tables() {
  return (
    <>
      <div className="container" id="table1">
        <h1>Heading Type</h1>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container" id="table1">
        <h1>Heading Type</h1>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container row" id="third_div">
        <div className="col" id="">
          <h1 id="third_div_h1">Heading Type</h1>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col" id="">
          <h1 id="third_div_h1">Heading Type</h1>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
