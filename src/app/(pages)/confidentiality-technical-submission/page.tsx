import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { confidentialityTechnicalSubmissionPage } from '@/assets';



const ConfidentialityTechnicalSubmission = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Confidentiality, Technical & Submission"
      image={confidentialityTechnicalSubmissionPage}
    />

  )
}

export default ConfidentialityTechnicalSubmission