// import { DocumentsImage } from "@/assets";
// import { CommonPage } from "@/components";
// import React from "react";

// const DocumentsPage = () => {
//   return (
//     <CommonPage
//       pageTitle={`Documents`}
//       src={DocumentsImage}
//       backRoute="/how-the-process-works"
//     />
//   );
// };

// export default DocumentsPage;


import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { DocumentsImage } from "@/assets";

const areas = [
  {
    alt: "Provider Name and legal status",
    title: "Provider Name and legal status",
    href: "/",
    coords: "76,483,605,560",
    shape: "rect",
  },
  {
    alt: "Aims and Objectives",
    title: "Aims and Objectives",
    href: "/",
    coords: "81,700,427,780",
    shape: "rect",
  },
  {
    alt: "CQC Service Types",
    title: "CQC Service Types",
    href: "/",
    coords: "477,703,813,780",
    shape: "rect",
  },
  {
    alt: "Register Manager details",
    title: "Register Manager details",
    href: "/",
    coords: "1251,701,1696,783",
    shape: "0",
  },
];

const DocumentsPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Documents`}
      backRoute="/how-the-process-works"
      image={DocumentsImage}
      areas={areas}
      target="_self"
    />

  )
}

export default DocumentsPage