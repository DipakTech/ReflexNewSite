import React from 'react'
import { CopyrightWrapper, CenterFooterContent } from './CoppyrightFooter.style'
import { MdCopyright } from 'react-icons/md'

import { Container } from '../globlaStyle/Container.style'

const CopyrightFooter = () => {
  return (
    <CopyrightWrapper>
      <Container>
        <CenterFooterContent>
            <li>
              <MdCopyright />{' '}
              <p>2022 wWW.reflexitsolution.com | Hosting partner cloud977 </p>
            </li>
        </CenterFooterContent>
      </Container>
    </CopyrightWrapper>
  )
}

export default CopyrightFooter
