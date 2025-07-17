import { AddLocationImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Application to add location by a provider",
    title: "Application to add location by a provider",
    href: "1-locations-regulated-activities-and-service-types",
    coords: "43,1195,639,1262",
    shape: "rect",
  },
  {
    alt: "Application details",
    title: "Application details",
    href: "/2-application-details",
    coords: "78,1273,425,1332",
    shape: "rect",
  },
  {
    alt: "Day-to-day management of regulated activities  at this location",
    title: "Day-to-day management of regulated activities  at this location",
    href: "/3-day-to-day-management-of-regulated-activities-at-this-location",
    coords: "105,1633,845,1721",
    shape: "rect",
  },
  {
    alt: "Purchase or Transfer of Existing Location(s)",
    title: "Purchase or Transfer of Existing Location(s)",
    href: "/6-purchase-or-transfer-of-existing-locations",
    coords: "87,2188,796,2264",
    shape: "rect",
  },
  {
    alt: "Details for Location number",
    title: "Details for Location number",
    href: "/5-details-for-location-number",
    coords: "102,2590,574,2671",
    shape: "rect",
  },
  {
    alt: "Planning consent ",
    title: "Planning consent ",
    href: "/9-planning-consent",
    coords: "86,3063,427,3130",
    shape: "rect",
  },
  {
    alt: "The service types provided at this location ",
    title: "The service types provided at this location ",
    href: "/4-the-service-types-provided-at-this-location",
    coords: "100,4596,778,4654",
    shape: "rect",
  },
  {
    alt: "Acute services (ACS)",
    title: "Acute services (ACS)",
    href: "/14-location-overview",
    coords: "120,4681,497,4741",
    shape: "rect",
  },
  {
    alt: "Condition of Registration (Number of Persons for  Nursing or Personal Care)",
    title: "Condition of Registration (Number of Persons for  Nursing or Personal Care)",
    href: "/condition-of-registration-number-of-persons-for-nursing-or-personal-care",
    coords: "91,6903,855,7000",
    shape: "rect",
  },
  {
    alt: "Service User Bands",
    title: "Service User Bands",
    href: "/8-service-user-bands",
    coords: "104,7546,448,7670",
    shape: "rect",
  },
  {
    alt: "Condition of registration about providing a specialist services",
    title: "Condition of registration about providing a specialist services",
    href: "/condition-of-registration-about-providing-a-specialist-service-to-people-with-a-learning-disability",
    coords: "94,8506,1041,8650",
    shape: "rect",
  },
  {
    alt: "Application declaration",
    title: "Application declaration",
    href: "/11-application-declaration",
    coords: "51,9250,460,9350",
    shape: "rect",
  },
  {
    alt: "submit this application and accompanying documents",
    title: "submit this application and accompanying documents",
    href: "/12-how-to-submit-this-application-and-accompanying-documents",
    coords: "50,9560,879,9680",
    shape: "rect",
  },
];



const AddLocationPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Add Location`}
      image={AddLocationImage}
      areas={areas}
      backRoute="/manage-location"
    />
  );
};

export default AddLocationPage;
