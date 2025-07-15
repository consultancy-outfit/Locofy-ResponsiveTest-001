import { glossaryOfTermsImg } from '@/assets'
import CommonImgMapPage from '@/components/common-img-map-page'
import React from 'react'

const GlossaryOfTerms = () => {
    return (
        <CommonImgMapPage
            backRoute="/fcs-annexes"
            pageTitle="FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Risk Management, Security Standards, and Reference Materials / Glossary of Terms"
            image={glossaryOfTermsImg}
        />
    )
}

export default GlossaryOfTerms