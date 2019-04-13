export function isNumber(item) {
  return !!Number(item)
}

// Returns if a value is a string
export function isString(value) {
  return typeof value === 'string' || value instanceof String
}
