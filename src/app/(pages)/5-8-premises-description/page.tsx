import React from 'react'
import CommonImgMapPage from '@/components/common-img-map-page'
import { PremisesDescriptionPage } from '@/assets';



const PremisesDescription = () => {
    return (
        <CommonImgMapPage
            backRoute="/application-to-carry-on-new-regulated-activity"
            pageTitle="Premises Description"
            image={PremisesDescriptionPage}
        />

    )
}

export default PremisesDescription;