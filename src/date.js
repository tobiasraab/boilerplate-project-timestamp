function isDateValid (dateString) {
  // check for type: string
  let dateObject = new Date(dateString)
  let isValid = dateObject instanceof Date && !isNaN(dateObject)

  if(!isValid) {
    // check for type: number
    dateObject = new Date(Number(dateString))
    isValid = dateObject instanceof Date && !isNaN(dateObject)
  }

  return isValid
}

function buildResponse(dateString) {
  // Build dateObject
  // check for type: string
  let dateObject = new Date(dateString)
  let isValid = dateObject instanceof Date && !isNaN(dateObject)

  if (!isValid) {
    // check for type: number
    dateObject = new Date(Number(dateString))
    isValid = dateString instanceof Date && !isNaN(dateString)
  }

  // build date formats for response
  const UNIX = dateObject.getTime()
  const UTC = dateObject.toUTCString()

  const RESPONSE = {
    unix: UNIX,
    utc: UTC
  }

  return RESPONSE
}

module.exports = { isDateValid, buildResponse }