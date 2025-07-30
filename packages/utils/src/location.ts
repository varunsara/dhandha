// Calculate distance between two coordinates using Haversine formula
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371 // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1)
  const dLon = toRadians(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const toRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180)
}

// Check if coordinates are within India bounds
export const isWithinIndiaBounds = (lat: number, lon: number): boolean => {
  return lat >= 6.5 && lat <= 37.1 && lon >= 68.1 && lon <= 97.4
}

// Get city tier based on city name
export const getCityTier = (city: string): 1 | 2 | 3 => {
  const tier1Cities = [
    'mumbai',
    'delhi',
    'bangalore',
    'hyderabad',
    'chennai',
    'kolkata',
    'pune',
    'ahmedabad'
  ]
  
  const tier2Cities = [
    'jaipur',
    'lucknow',
    'kanpur',
    'nagpur',
    'indore',
    'thane',
    'bhopal',
    'visakhapatnam',
    'pimpri-chinchwad',
    'patna',
    'vadodara',
    'ghaziabad',
    'ludhiana',
    'agra',
    'nashik',
    'faridabad',
    'meerut',
    'rajkot',
    'kalyan-dombivli',
    'vasai-virar',
    'varanasi',
    'srinagar',
    'aurangabad',
    'dhanbad',
    'amritsar',
    'navi mumbai',
    'allahabad',
    'howrah',
    'ranchi',
    'gwalior',
    'jabalpur',
    'coimbatore',
    'vijayawada',
    'jodhpur',
    'madurai',
    'raipur',
    'kota',
    'chandigarh',
    'guwahati'
  ]
  
  const normalizedCity = city.toLowerCase().trim()
  
  if (tier1Cities.includes(normalizedCity)) {
    return 1
  } else if (tier2Cities.includes(normalizedCity)) {
    return 2
  } else {
    return 3
  }
}

// Generate map URL for given coordinates
export const generateMapUrl = (lat: number, lon: number, zoom = 15): string => {
  return `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}`
}

// Generate directions URL between two points
export const generateDirectionsUrl = (
  fromLat: number,
  fromLon: number,
  toLat: number,
  toLon: number
): string => {
  return `https://www.google.com/maps/dir/${fromLat},${fromLon}/${toLat},${toLon}`
}

// Format coordinates for display
export const formatCoordinates = (lat: number, lon: number): string => {
  return `${lat.toFixed(6)}, ${lon.toFixed(6)}`
}