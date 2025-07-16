import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { Section2NominatedIndividualsPage } from '@/assets';



const Section2NominatedIndividuals = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Nominated individuals "
      image={Section2NominatedIndividualsPage}
    />

  )
}

export default Section2NominatedIndividuals