import React from "react";

const DataTable = ({ data, handleCheckboxChange, handleTextChange }) => {
 return (
  <>
   <table>
    <thead>
     <tr>
      <th className=" text-3xl darkBlueG py-2 hFont" colSpan={22}>
       يومي في رمضان
      </th>
     </tr>
     <tr>
      <th rowSpan={3} className="blueG text-2xl">
       اليوم
      </th>
      <th colSpan={9} className="greenG text-2xl">
       الصلاة
      </th>
      <th colSpan={5} className="pinkG text-2xl">
       الأذكار
      </th>
      <th colSpan={2} className="orangG text-2xl">
       قرآن
      </th>
      <th colSpan={5} className="blueG text-2xl">
       أعمال صالحة
      </th>
     </tr>
     <tr>
      <th rowSpan={1} colSpan={5} className="font-extrabold">
       الفروص <span className="font-normal">(على وقتها)</span>
      </th>
      <th rowSpan={1} colSpan={4} className="font-extrabold">
       النوافل
      </th>
      <th rowSpan={2} className="-rotate-90 font-extrabold">
       الصباح
      </th>
      <th rowSpan={2} className="-rotate-90 font-extrabold">
       المساء
      </th>
      <th rowSpan={2} className="font-extrabold">
       الاستغفار
      </th>
      <th rowSpan={2}>
       الصلاة على
       <br /> النبي ﷺ
      </th>
      <th rowSpan={2}>
       اذكار <br />
       عامة <br />
       ودعاء
      </th>
      <th rowSpan={2}>
       <span>ورد</span>
       <br /> <span className="text-2xl font-extrabold">تلاوة</span>
      </th>
      <th rowSpan={2}>
       <span>ورد</span>
       <br /> <span className="text-2xl font-extrabold">تدبر</span>
      </th>
      <th rowSpan={2} className="-rotate-90">
       صدقة
      </th>
      <th rowSpan={2} className="px-1">
       بر <br />
       الوالدين
      </th>
      <th rowSpan={2} className="px-1">
       صلة <br />
       الرحم
      </th>
      <th rowSpan={2} className="px-1">
       ادخال <br />
       سرور
      </th>
      <th rowSpan={2} className="-rotate-90">
       إطعام
      </th>
     </tr>
     <tr>
      <th rowSpan={1} className="-rotate-90 font-extrabold">
       فجر
      </th>
      <th rowSpan={1} className="-rotate-90 font-extrabold">
       ظهر
      </th>
      <th rowSpan={1} className="-rotate-90 font-extrabold">
       عصر
      </th>
      <th rowSpan={1} className="-rotate-90 font-extrabold">
       مغرب
      </th>
      <th rowSpan={1} className="-rotate-90 font-extrabold">
       عشاء
      </th>
      <th rowSpan={1}>
       <span>السنن الرواتب</span>
       <span></span>
       <br />
       <span className="font-normal whitespace-nowrap">(12 ركعة)</span>
      </th>
      <th rowSpan={1}>الشروق</th>
      <th rowSpan={1}>الضحى</th>
      <th rowSpan={1}>
       <span>قيام </span>
       <span>الليل</span>
       <br />
       <span className="font-normal whitespace-nowrap">(تراويح-تجهد)</span>
      </th>
     </tr>
    </thead>
    <div className="h-[2px]" />
    <tbody>
     {data.map((rowData, index) => (
      <tr key={index}>
       <td
        className={`${
         index === 0 || index === 10 || index === 20
          ? "blueG"
          : index % 2 === 0
          ? "bg-[#E6EBEF]"
          : "whitespace-nowrap px-3"
        }`}
       >
        {index + 1} رمضان
       </td>
       {Object.entries(rowData.prays.elFrod).map(([key, value]) => (
        <td
         className={`${
          index === 0 || index === 10 || index === 20
           ? "bg-[#DEEFE5]"
           : index % 2 === 0
           ? "bg-[#E6EBEF]"
           : ""
         }`}
         key={key}
        >
         <input
          type="checkbox"
          checked={value}
          onChange={() => {
           handleCheckboxChange(index, "prays", key, "elFrod");
          }}
         />
         {}
        </td>
       ))}
       {Object.entries(rowData.prays.elNwafel).map(([key, value]) => (
        <td
         className={`${
          index === 0 || index === 10 || index === 20
           ? "bg-[#DEEFE5]"
           : index % 2 === 0
           ? "bg-[#E6EBEF]"
           : ""
         }`}
         key={key}
        >
         <input
          type="checkbox"
          checked={value}
          onChange={() => {
           handleCheckboxChange(index, "prays", key, "elNwafel");
          }}
         />
        </td>
       ))}

       {Object.entries(rowData.azkar).map(([key, value]) => (
        <td
         className={`${
          index === 0 || index === 10 || index === 20
           ? "bg-[#F7EBEF]"
           : index % 2 === 0
           ? "bg-[#E6EBEF]"
           : ""
         }`}
         key={key}
        >
         <input
          type="checkbox"
          checked={value}
          onChange={() => {
           handleCheckboxChange(index, "azkar", key);
          }}
         />
        </td>
       ))}
       {Object.entries(rowData.quran).map(([key, value]) => (
        <td
         className={`${
          index === 0 || index === 10 || index === 20
           ? "bg-[#ff975a2a]"
           : index % 2 === 0
           ? "bg-[#e6ebef]"
           : "whitespace-nowrap px-3"
         }`}
         key={key}
        >
         <input
          type="text"
          value={value}
          onChange={(e) => {
           handleTextChange(index, "quran", key, e.target.value);
          }}
          className="rounded-full border-black border-[1px] px-2 w-32"
         />
        </td>
       ))}
       {Object.entries(rowData.goodDeeds).map(([key, value]) => (
        <td
         className={`${
          index === 0 || index === 10 || index === 20
           ? "bg-[#DDEFEF]"
           : index % 2 === 0
           ? "bg-[#E6EBEF]"
           : ""
         }`}
         key={key}
        >
         <input
          type="checkbox"
          checked={value}
          onChange={() => {
           handleCheckboxChange(index, "goodDeeds", key);
          }}
         />
        </td>
       ))}
      </tr>
     ))}
    </tbody>
   </table>
  </>
 );
};

export default DataTable;
