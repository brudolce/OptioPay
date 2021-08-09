import './home.css'
import Input from '../../components/Input'
import InfoCard from '../../components/InfoCard'
import Masks from '../../utils/masks'
import { RomanNumerals } from '../../utils/helpers'

import { useState } from 'react'

const Home = () => {
  const [dataI, setDataI] = useState('')
  const [dataR, setDataR] = useState('')

  const display = (data, method = () => undefined) => {
    return method(data)
  }

  return (
    <div>
      <header>
        <h1>optiopay challenge</h1>
      </header>
      <section>
        <Input
          name="Integer Number Calculator"
          value={dataI}
          setValue={setDataI}
          placeholder="Type a Roman Numeral..."
          treat={Masks.onlyRomans}
          maxlength="9"
        />
        <InfoCard value={display(dataI, RomanNumerals.fromRoman)} />
      </section>
      <section>
        <Input
          name="Roman Numeral Calculator"
          value={dataR}
          setValue={setDataR}
          placeholder="Type a Integer Number..."
          treat={Masks.onlyNumber}
          maxlength="4"
        />
        <InfoCard value={display(dataR, RomanNumerals.toRoman)} />
      </section>
    </div>
  )
}

export default Home
