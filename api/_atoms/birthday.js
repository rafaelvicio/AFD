const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  VALIDATE: false,
  labels: {
    'pt-br': 'aniversario',
    'en': 'birthday',
  }
}
const PROPS = {
  type: Date,
}

const atomConfig = Object.assign({}, DEFAULT, PROPS)

const Atom = require('./../_factories/atom')(atomConfig)

module.exports = Atom
