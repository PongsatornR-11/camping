import React from 'react'
import { fetchFavoriteByUser } from '@/actions/action'
import LocationList from '@/components/home/LocationList'

const FavoritesPage = async() => {
  const favorites = await fetchFavoriteByUser()
  
  return <LocationList locations={favorites}/> 
}

export default FavoritesPage