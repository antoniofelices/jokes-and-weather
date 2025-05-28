import { weatherlocation, weatherTemperature } from '@/ui/selectors'

async function printWeather(data: any) {
    const unitTemperature = '°C'
    weatherTemperature.textContent = `${data.current.temp_c} ${unitTemperature}`
    weatherlocation.textContent = data.location.name
}

export default printWeather
