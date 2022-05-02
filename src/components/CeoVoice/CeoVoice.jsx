import React, { useState } from 'react'
import { ReviewContainer, Voice, VoiceContainer, Name } from './CeoVoice.style'
import CeoVoices from '../../CEOVoice'

const CeoVoice = () => {
  const [people, setPeople] = useState(CeoVoices)
  const [index, setIndex] = useState(0)

  return (
    <ReviewContainer>
      <VoiceContainer>
        <Voice>
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor Amet
          minim mollit non deserunt ullamco est sit aliqua dolor.”{' '}
        </Voice>
        <Name>
          <p>Dipak</p>
        </Name>
      </VoiceContainer>
    </ReviewContainer>
  )
}

export default CeoVoice
