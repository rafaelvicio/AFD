const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  labels: {
    'pt-br': 'Bibliografia',
    'en': 'Bibliography',
  }
}
const PROPS = {
  type: String,
  min: 5,
  max: 12,
  required: true
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

const Atom = require('./../_factories/atom')(atomConfig)

module.exports = Atom
