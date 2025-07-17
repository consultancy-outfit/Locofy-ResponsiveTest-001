import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { SubjectAccessRequestImage } from '@/assets';

const areas = [
  {
    alt: "Contact Details",
    title: "Contact Details",
    href: "/subject-access-request-self",
    coords: "27,24,327,108",
    shape: "rect",
  },
  {
    alt: "Request Details & Role",
    title: "Request Details & Role",
    href: "/the-information-you-are-requesting",
    coords: "35,284,417,354",
    shape: "rect",
  },
  {
    alt: "Proof of Identity",
    title: "Proof of Identity",
    href: "/proof-of-your-identity",
    coords: "24,803,342,875",
    shape: "rect",
  },
  {
    alt: "Using your Information",
    title: "Using your Information",
    href: "/using-your-information",
    coords: "19,1316,424,1410",
    shape: "rect",
  },
];



const SubjectAccessRequestPage = () => {
  return (
    <CommonImgMapPage
      backRoute="/how-the-process-works"
      pageTitle="Subject Access Request"
      image={SubjectAccessRequestImage}
      areas={areas}
      target="_self"
    />

  )
}

export default SubjectAccessRequestPage