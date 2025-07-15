import React from 'react'
// import { fcaAnnexes } from '@/assets'
import CommonImgMapPage from '@/components/common-img-map-page'
import { applicationToCancelOnaNewRegulatedActivityPage, applicationToCarryOnaNewRegulatedActivityPage } from '@/assets';

const areas = [
  {
    alt: "Eligibility, Restrictions, and Instructions for Completion",
    title: "Eligibility, Restrictions, and Instructions for Completion",
    href: "/",
    coords: "17,212,869,299",
    shape: "rect",
  },
  {
    alt: "Submission Process",
    title: "Submission Process",
    href: "/",
    coords: "25,504,389,570",
    shape: "rect",
  },
  {
    alt: "Section 1: Application Details",
    title: "Section 1: Application Details",
    href: "/",
    coords: "20,867,509,938",
    shape: "rect",
  },
  {
    alt: "1.1 Applicant’s Name and Contact Details",
    title: "1.1 Applicant’s Name and Contact Details",
    href: "/",
    coords: "35,956,696,1018",
    shape: "rect",
  },
  {
    alt: "1.3, 1.4 & 1.5  Cancelation date, Select activity and Reason",
    title: "1.3, 1.4 & 1.5  Cancelation date, Select activity and Reason",
    href: "/",
    coords: "943,951,1803,1020",
    shape: "rect",
  },
  {
    alt: "1.2 Service Provider’s Details",
    title: "1.2 Service Provider’s Details",
    href: "/",
    coords: "37,1214,528,1281",
    shape: "rect",
  },
  {
    alt: "1.6 Other Details",
    title: "1.6 Other Details",
    href: "/",
    coords: "948,1206,1276,1273",
    shape: "rect",
  },
  {
    alt: "Section 2: Application Declaration",
    title: "Section 2: Application Declaration",
    href: "/",
    coords: "17,1510,590,1578",
    shape: "rect",
  },
  {
    alt: "By submitting the application, the applicant affirms",
    title: "By submitting the application, the applicant affirms",
    href: "/",
    coords: "45,1593,833,1663",
    shape: "rect",
  },
  {
    alt: "Important Notices & Privacy Notice",
    title: "Important Notices & Privacy Notice",
    href: "",
    coords: "37,1854,613,1923",
    shape: "rect",
  },
  {
    alt: "Signatory InformationSignatory Information",
    title: "Signatory InformationSignatory Information",
    href: "/",
    coords: "940,1854,1335,1923",
    shape: "rect",
  },
  {
    alt: "Where to Submit the Application",
    title: "Where to Submit the Application",
    href: "/",
    coords: "29,2143,556,2223",
    shape: "rect",
  },
];



const ApplicationToCancelOneRegulatedActivity = () => {
  return (
    <CommonImgMapPage
      backRoute="/add-remove-regulated-activities"
      pageTitle="Application to carry on a new regulated activity "
      image={applicationToCancelOnaNewRegulatedActivityPage}
      areas={areas}
      target="_self"
    />

  )
}

export default ApplicationToCancelOneRegulatedActivity