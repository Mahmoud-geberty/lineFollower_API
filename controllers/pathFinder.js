exports.findPath = (junctionId) => {
  // remember the junctionId is a string and not a number.
  return {
    status: 'OK',
    path: `received with junction ID: ${junctionId}`
  }
}