import React, { useEffect, useState } from "react";
import "./App.css";
import DataTable from "./components/DataTable";

function App() {
 const row = {
  prays: {
   elFrod: {
    fajr: false,
    zuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
   },
   elNwafel: {
    sunnan: false,
    duha: false,
    quanEllil: false,
   },
  },
  azkar: {
   elSpah: false,
   elMsaa: false,
   alEstgfar: false,
   prayOnProphet: false,
   public: false,
  },
  quran: {
   telawah: "",
   tdpor: "",
  },
  goodDeeds: {
   sudqa: false,
   baruAlwalidayn: false,
   salahAlrahim: false,
   surur: false,
   feeding: false,
  },
 };

 const [data, setData] = useState(() => {
  const storedData = JSON.parse(localStorage.getItem("data"));
  return storedData || Array(30).fill(row);
 });

 useEffect(() => {
  localStorage.setItem("data", JSON.stringify(data));
 }, [data]);

 const handleCheckboxChange = (rowIndex, category, key, subCategory) => {
  if (subCategory) {
   setData((prevData) => {
    const newData = [...prevData];
    newData[rowIndex] = {
     ...newData[rowIndex],
     [category]: {
      ...newData[rowIndex][category],
      [subCategory]: {
       ...newData[rowIndex][category][subCategory],
       [key]: !newData[rowIndex][category][subCategory][key],
      },
     },
    };
    return newData;
   });
  } else {
   setData((prevData) => {
    const newData = [...prevData];
    newData[rowIndex] = {
     ...newData[rowIndex],
     [category]: {
      ...newData[rowIndex][category],
      [key]: !newData[rowIndex][category][key],
     },
    };
    return newData;
   });
  }
 };
 const handleTextChange = (rowIndex, category, key,value) => {
  setData((prevData) => {
   const newData = [...prevData];
   newData[rowIndex] = {
    ...newData[rowIndex],
    [category]: {
     ...newData[rowIndex][category],
     [key]: value,
    },
   };
   return newData;
  });
 };

 console.log(Object.entries(data[0]));

 return (
  <div className="container mx-auto min-h-screen ">
    {data && (
     <DataTable
      data={data}
      handleCheckboxChange={handleCheckboxChange}
      handleTextChange={handleTextChange}
     />
    )}

  </div>
 );
}

export default App;
