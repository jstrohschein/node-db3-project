// scheme-model
const db = require('../data/db-config')

module.exports = {
  find,
  findByID,
  findSteps,
  scheme_name,
  add,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findById(id) {
  const scheme = db('schemes').where({ id }).first()
}

function findSteps(id) {
  const steps = db('steps')
    .join('schemes','schemes.id','steps.scheme_id')
    .where({ scheme_id:id })
    .select('step.id', 'scheme.scheme_name', 'steps.instructions')

    return steps
}

function scheme_name(id) {
  return db('schemes')
    .where({ id }).first()
}

function add(name) {
  return db('schemes').insert(name)
}

