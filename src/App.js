import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./App.css";

function App() {
  const myForm = document.getElementById("myForm");
  const csvFile = document.getElementById("csvFile");

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      Papa.parse(text, {
        complete: function (results) {
          console.log(results);
        },
        header: true,
      });
      // const data = d3.csvParse(text);
      // document.write(JSON.stringify(data));
    };

    reader.readAsText(input);
  });

  return (
    <>
      <form id="myForm">
        <input type="file" id="csvFile" accept=".csv" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default App;
