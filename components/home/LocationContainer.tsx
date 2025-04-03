import { fetchLocation } from '@/actions/action'

import LocationList from './LocationList'

import {locationCardProps} from '@/utils/types'

const LocationContainer = async() => {
    const locations:locationCardProps[] = await fetchLocation()
  return (
    <div >
        <LocationList locations={locations}/>
    </div>
  )
}

export default LocationContainer