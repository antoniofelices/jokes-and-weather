import { weatherlocation, weatherTemperature } from '@/ui/selectors'
import resultConfig from '@/helpers/resultConfig'

async function printWeather(data: any) {
    weatherTemperature.textContent = `${data.current.temp_c} ${resultConfig.unitTemperaturePrintWeather}`
    weatherlocation.textContent = data.location.name
}

export default printWeather
