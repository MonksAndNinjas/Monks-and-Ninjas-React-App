export function fetchAvailabilities() {
  const availabilities =     fetch('api/availabilities', {accept: 'application/json'})
  return {
    type: 'FETCH_AVAILABILITES',
    availabilities
  }
}
