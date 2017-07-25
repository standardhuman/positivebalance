// pluralizer
export function pluralize (minqty, unit) {
  return (minqty > 1) && (unit.slice(-1) !== "s") ? unit += "s" : unit
}

// equalizer
export function equalizer (moreorless, minqty, weight, howManyTimes){
  return (moreorless * (weight / 10) * (howManyTimes)).toFixed(1)
}
