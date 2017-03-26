const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  labels: {
    'pt-br': 'tag',
    'en': 'tag',
  }
}
const PROPS = {
  type: String,
  max: 3
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

const Atom = require('./../_factories/atom')(atomConfig)

module.exports = Atom
