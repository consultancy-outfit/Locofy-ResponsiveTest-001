import React from 'react'
// import { fcaAnnexes } from '@/assets'
import CommonImgMapPage from '@/components/common-img-map-page'
import { applicationToCarryOnaNewRegulatedActivityPage } from '@/assets';

const areas = [
  {
    alt: "Form Purpose & Legal Basis",
    title: "Form Purpose & Legal Basis",
    href: "/form-purpose-legal-basis",
    coords: "24,173,495,246",
    shape: "rect",
  },
  {
    alt: "Fees, Managers & Transfers",
    title: "Fees, Managers & Transfers",
    href: "/",
    coords: "30,464,487,532",
    shape: "rect",
  },
  {
    alt: "Confidentiality, Technical & Submission",
    title: "Confidentiality, Technical & Submission",
    href: "/",
    coords: "25,1105,636,1167",
    shape: "rect",
  },
  {
    alt: "Section 1: Provider Info",
    title: "Section 1: Provider Info",
    href: "/",
    coords: "25,1463,417,1531",
    shape: "rect",
  },
  {
    alt: "Section 2: Nominated Person",
    title: "Section 2: Nominated Person",
    href: "/",
    coords: "22,1748,494,1818",
    shape: "rect",
  },
  {
    alt: "Section 3: Application Details",
    title: "Section 3: Application Details",
    href: "/",
    coords: "27,2034,517,2098",
    shape: "rect",
  },
  {
    alt: "Section 4: Location Overview",
    title: "Section 4: Location Overview",
    href: "/",
    coords: "25,2318,509,2382",
    shape: "rect",
  },
  {
    alt: "Section 5: Existing Locations",
    title: "Section 5: Existing Locations",
    href: "/",
    coords: "27,2595,492,2657",
    shape: "rect",
  },
  {
    alt: "5.1 Location Details",
    title: "5.1 Location Details",
    href: "/",
    coords: "38,2682,391,2742",
    shape: "rect",
  },
  {
    alt: "5.3 Service Types",
    title: "5.3 Service Types",
    href: "/",
    coords: "30,2946,386,3007",
    shape: "rect",
  },
  {
    alt: "5.2 Regulated Activities at Location",
    title: "5.2 Regulated Activities at Location",
    href: "/",
    coords: "1240,2677,1803,2747",
    shape: "rect",
  },
  {
    alt: "5.4 Regulated Activity Conditions",
    title: "5.4 Regulated Activity Conditions",
    href: "/",
    coords: "624,2943,1175,3012",
    shape: "rect",
  },
  {
    alt: "5.5 Nursing Care Condition",
    title: "5.5 Nursing Care Condition",
    href: "/",
    coords: "1232,2946,1733,3010",
    shape: "rect",
  },
  {
    alt: "5.6 Activity Registration Conditions",
    title: "5.6 Activity Registration Conditions",
    href: "/",
    coords: "37,3229,595,3307,585,3309",
    shape: "rect",
  },
  {
    alt: "5.7 Maximum Service Users",
    title: "5.7 Maximum Service Users",
    href: "/",
    coords: "637,3232,1193,3302",
    shape: "rect",
  },
  {
    alt: "5.8 Premises Description",
    title: "5.8 Premises Description",
    href: "/",
    coords: "1238,3229,1772,3294",
    shape: "rect",
  },
  {
    alt: "Section 6: New Locations",
    title: "Section 6: New Locations",
    href: "/",
    coords: "27,3539,464,3609",
    shape: "rect",
  },
  {
    alt: "6.1 Location Name",
    title: "6.1 Location Name",
    href: "/",
    coords: "40,3627,378,3701",
    shape: "rect",
  },
  {
    alt: "6.2 Location Address",
    title: "6.2 Location Address",
    href: "/",
    coords: "931,3630,1364,3701",
    shape: "rect",
  },
  {
    alt: "6.3 Contact Details",
    title: "6.3 Contact Details",
    href: "/",
    coords: "40,3883,438,3957",
    shape: "rect",
  },
  {
    alt: "6.4 Location Type",
    title: "6.4 Location Type",
    href: "/",
    coords: "930,3883,1284,3955",
    shape: "rect",
  },
  {
    alt: "6.5 Regulated Activities",
    title: "6.5 Regulated Activities",
    href: "/",
    coords: "42,4138,466,4210",
    shape: "rect",
  },
  {
    alt: "6.6 Service Types",
    title: "6.6 Service Types",
    href: "/",
    coords: "933,4141,1274,4213",
    shape: "rect",
  },
  {
    alt: "6.7 Opening Date",
    title: "6.7 Opening Date",
    href: "/",
    coords: "47,4393,383,4464",
    shape: "rect",
  },
  {
    alt: "6.8 User Categories",
    title: "6.8 User Categories",
    href: "/",
    coords: "931,4394,1299,4468",
    shape: "rect",
  },
  {
    alt: "6.9 Service User Bands",
    title: "6.9 Service User Bands",
    href: "/",
    coords: "43,4644,450,4716",
    shape: "rect",
  },
  {
    alt: "6.10 Additional Specialisms",
    title: "6.10 Additional Specialisms",
    href: "/",
    coords: "933,4652,1397,4719",
    shape: "rect",
  },
  {
    alt: "6.11 Spoken Languages",
    title: "6.11 Spoken Languages",
    href: "/",
    coords: "32,4899,469,4977",
    shape: "rect",
  },
  {
    alt: "6.12 24/7 Operation",
    title: "6.12 24/7 Operation",
    href: "/",
    coords: "936,4907,1339,4982",
    shape: "rect",
  },
  {
    alt: "6.13 Home-Based Services",
    title: "6.13 Home-Based Services",
    href: "/",
    coords: "30,5148,515,5233",
    shape: "rect",
  },
  {
    alt: "6.14 Supported Living Services",
    title: "6.14 Supported Living Services",
    href: "/",
    coords: "922,5158,1462,5233,456,5526,464,5522,20,5449,460,5495,394,5519,180,5444,311,5475,233,5470",
    shape: "rect",
  },
  {
    alt: "Section 7: Service Delivery",
    title: "Section 7: Service Delivery",
    href: "/",
    coords: "33,5444,486,5534",
    shape: "rect",
  },
  {
    alt: "Section 8: Final Declaration",
    title: "Section 8: Final Declaration",
    href: "/",
    coords: "17,5721,502,5805",
    shape: "rect",
  },
  {
    alt: "Submission: Final Instructions",
    title: "Submission: Final Instructions",
    href: "/",
    coords: "25,6010,522,6082",
    shape: "rect",
  },
];


const ApplicationToCarryOnNewRegulatedActivity = () => {
  return (
    <CommonImgMapPage
      backRoute="/add-remove-regulated-activities"
      pageTitle="Application to cancel one regulated activity"
      image={applicationToCarryOnaNewRegulatedActivityPage}
      areas={areas}
      target="_self"
    />

  )
}

export default ApplicationToCarryOnNewRegulatedActivity