import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { TheServiceTypesProvidedAtThisLocationPage } from '@/assets';



const TheServiceTypesProvidedAtThisLocation = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="The service types provided at this location"
      image={TheServiceTypesProvidedAtThisLocationPage}
    />

  )
}

export default TheServiceTypesProvidedAtThisLocation;