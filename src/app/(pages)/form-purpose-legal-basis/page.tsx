import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { formpurposeLoegalBasis } from '@/assets';



const FormPurposeLegalBasis = () => {
  return (
    <CommonImgMapPage
      backRoute="/application-to-carry-on-new-regulated-activity"
      pageTitle="Form Purpose & Legal Basis"
      image={formpurposeLoegalBasis}
    />

  )
}

export default FormPurposeLegalBasis