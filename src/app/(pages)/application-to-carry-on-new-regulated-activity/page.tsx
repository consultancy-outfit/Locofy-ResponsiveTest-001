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
    href: "/fees-managers-and-transfers",
    coords: "30,464,487,532",
    shape: "rect",
  },
  {
    alt: "Confidentiality, Technical & Submission",
    title: "Confidentiality, Technical & Submission",
    href: "/confidentiality-technical-submission",
    coords: "25,1105,636,1167",
    shape: "rect",
  },
  {
    alt: "Section 1: Provider Info",
    title: "Section 1: Provider Info",
    href: "/section-1-service-provider-and-the-additional-regulated-activity",
    coords: "25,1463,417,1531",
    shape: "rect",
  },
  {
    alt: "Section 2: Nominated Person",
    title: "Section 2: Nominated Person",
    href: "/section-2-nominated-individuals",
    coords: "22,1748,494,1818",
    shape: "rect",
  },
  {
    alt: "Section 3: Application Details",
    title: "Section 3: Application Details",
    href: "/section-3-application-details",
    coords: "27,2034,517,2098",
    shape: "rect",
  },
  {
    alt: "Section 4: Location Overview",
    title: "Section 4: Location Overview",
    href: "/section-4-locations",
    coords: "25,2318,509,2382",
    shape: "rect",
  },
  {
    alt: "Section 5: Existing Locations",
    title: "Section 5: Existing Locations",
    href: "/section-5-Existing-locations-where-you-want-to-carry-on-the-new-regulated-activity",
    coords: "27,2595,492,2657",
    shape: "rect",
  },
  {
    alt: "5.1 Location Details",
    title: "5.1 Location Details",
    href: "/5-1-details-for-location-number",
    coords: "38,2682,391,2742",
    shape: "rect",
  },
  {
    alt: "5.2 Regulated Activities at Location",
    title: "5.2 Regulated Activities at Location",
    href: "/5-2-all-regulated-activities-you-propose-to-carry-on-at-this-location",
    coords: "1240,2677,1803,2747",
    shape: "rect",
  },
  {
    alt: "5.3 Service Types",
    title: "5.3 Service Types",
    href: "/5-3-the-service-types-provided-at-this-location",
    coords: "30,2946,386,3007",
    shape: "rect",
  },
  {
    alt: "5.4 Regulated Activity Conditions",
    title: "5.4 Regulated Activity Conditions",
    href: "/5-4-regulated-activity-conditions",
    coords: "624,2943,1175,3012",
    shape: "rect",
  },
  {
    alt: "5.5 Nursing Care Condition",
    title: "5.5 Nursing Care Condition",
    href: "/5-5-nursing-care-condition",
    coords: "1232,2946,1733,3010",
    shape: "rect",
  },
  {
    alt: "5.6 Activity Registration Conditions",
    title: "5.6 Activity Registration Conditions",
    href: "/5-6-activity-registration-conditions",
    coords: "37,3229,595,3307,585,3309",
    shape: "rect",
  },
  {
    alt: "5.7 Maximum Service Users",
    title: "5.7 Maximum Service Users",
    href: "/5-7-maximum-service-users",
    coords: "637,3232,1193,3302",
    shape: "rect",
  },
  {
    alt: "5.8 Premises Description",
    title: "5.8 Premises Description",
    href: "/5-8-premises-description",
    coords: "1238,3229,1772,3294",
    shape: "rect",
  },
  {
    alt: "Section 6: New Locations",
    title: "Section 6: New Locations",
    href: "/section-6-new-locations-where-you-want",
    coords: "27,3539,464,3609",
    shape: "rect",
  },
  {
    alt: "6.1 Location Name",
    title: "6.1 Location Name",
    href: "/6-1-purchase-or-transfer-of-existing-locations-section1",
    coords: "40,3627,378,3701",
    shape: "rect",
  },
  {
    alt: "6.2 Location Address",
    title: "6.2 Location Address",
    href: "/6-2-details-for-location-number",
    coords: "931,3630,1364,3701",
    shape: "rect",
  },
  {
    alt: "6.3 Contact Details",
    title: "6.3 Contact Details",
    href: "/6-3-all-regulated-activities-you-propose-to-carry-on-at-this-location",
    coords: "40,3883,438,3957",
    shape: "rect",
  },
  {
    alt: "6.4 Location Type",
    title: "6.4 Location Type",
    href: "/6-4-the-services-types-provided-at-this-location",
    coords: "930,3883,1284,3955",
    shape: "rect",
  },
  {
    alt: "6.5 Regulated Activities",
    title: "6.5 Regulated Activities",
    href: "/6-5-condition-of-registration-about-the-number-of-persons-accommodated-to-receive-nursing-or-personal-care-at-this-location",
    coords: "42,4138,466,4210",
    shape: "rect",
  },
  {
    alt: "6.6 Service Types",
    title: "6.6 Service Types",
    href: "/6-6-condition-of-registration-about-not-providing-nursing-care-at-this-location",
    coords: "933,4141,1274,4213",
    shape: "rect",
  },
  {
    alt: "6.7 Opening Date",
    title: "6.7 Opening Date",
    href: "/6-7-condition-of-registration-about-the-regulated-activity-or-activities-at-this-and-other-locations",
    coords: "47,4393,383,4464",
    shape: "rect",
  },
  {
    alt: "6.8 User Categories",
    title: "6.8 User Categories",
    href: "/6-8-service-user-bands",
    coords: "931,4394,1299,4468",
    shape: "rect",
  },
  {
    alt: "6.9 Service User Bands",
    title: "6.9 Service User Bands",
       href: "/6-9-condition-of-registration-about-providing-a-specialist-service-to-people",
    // href: "/6-9-condition-of-registration-about-providing-a-specialist-service-to-people-with-a-learning-disability-or-people-with-a-learning-disability-and-autism",
    coords: "43,4644,450,4716",
    shape: "rect",
  },
  {
    alt: "6.10 Additional Specialisms",
    title: "6.10 Additional Specialisms",
    href: "/6-10-planning-consent",
    coords: "933,4652,1397,4719",
    shape: "rect",
  },
  {
    alt: "6.11 Spoken Languages",
    title: "6.11 Spoken Languages",
    href: "/6-11-building-regulations",
    coords: "32,4899,469,4977",
    shape: "rect",
  },
  {
    alt: "6.12 24/7 Operation",
    title: "6.12 24/7 Operation",
    href: "/6-12-safety-of-equipment-plant-and-utilities",
    coords: "936,4907,1339,4982",
    shape: "rect",
  },
  {
    alt: "6.13 Home-Based Services",
    title: "6.13 Home-Based Services",
    href: "/6-13-landlordmortgage-lender-permission",
    coords: "30,5148,515,5233",
    shape: "rect",
  },
  {
    alt: "6.14 Supported Living Services",
    title: "6.14 Supported Living Services",
    href: "/6-14-food-safety",
    coords: "922,5158,1462,5233,456,5526,464,5522,20,5449,460,5495,394,5519,180,5444,311,5475,233,5470",
    shape: "rect",
  },
  {
    alt: "Section 7: Service Delivery",
    title: "Section 7: Service Delivery",
    href: "/7-how-you-will-provide-your-service",
    coords: "33,5444,486,5534",
    shape: "rect",
  },
  {
    alt: "Section 8: Final Declaration",
    title: "Section 8: Final Declaration",
    href: "/8-application-declaration",
    coords: "17,5721,502,5805",
    shape: "rect",
  },
  {
    alt: "Submission: Final Instructions",
    title: "Submission: Final Instructions",
    href: "/how-to-submit-this-application-and-accompanying-documents",
    coords: "25,6010,522,6082",
    shape: "rect",
  },
];


const ApplicationToCarryOnNewRegulatedActivity = () => {
  return (
    <CommonImgMapPage
      backRoute="/add-remove-regulated-activities"
      pageTitle="Application to carry on a new regulated activity"
      image={applicationToCarryOnaNewRegulatedActivityPage}
      areas={areas}
      target="_self"
    />

  )
}

export default ApplicationToCarryOnNewRegulatedActivity