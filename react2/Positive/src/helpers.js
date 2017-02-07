// pluralizer
function pluralize (minqty, unit) {
  return (minqty > 1) && (unit.slice(-1) !== "s") ? unit += "s" : unit
}
