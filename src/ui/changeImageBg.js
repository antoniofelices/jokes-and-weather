import blob00 from '@/assets/images/blob-00.svg'
import blob01 from '@/assets/images/blob-01.svg'
import blob02 from '@/assets/images/blob-02.svg'
import blob03 from '@/assets/images/blob-03.svg'
import blob04 from '@/assets/images/blob-04.svg'
import blob05 from '@/assets/images/blob-05.svg'
import { body } from '@ui/selectors'

function changeImageBg() {
    let randomNumber = Math.floor(Math.random() * 6)
    const allBackgroundImages = [blob00, blob01, blob02, blob03, blob04, blob05]
    let randomValue = allBackgroundImages[randomNumber]
    body.style.backgroundImage = `url("${randomValue}")`
}

export default changeImageBg
