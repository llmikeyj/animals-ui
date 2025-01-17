import { config } from 'dotenv'
config()

import Animals from '../services/animals.js'
const animals = new Animals(process.env.API_URL)

export function all (req, res) {
  animals
    .all()
    .then((data) => { res.render('animals', { animals: data }) })
}

export function get (req, res) {
  animals
    .get(req.params.id)
    .then((data) => { res.render('view-animal', { animal: data }) })
}

export function addPage (req, res) {
  res.render('add-animal')
}

export function add (req, res) {
  animals
    .create(req.body)
    .then(() => { res.redirect('/animals') })
}

export function del (req, res) {
  animals
      .del(req.params.id)
      .then(() => { res.redirect('/animals') })
}

export function updatePage (req, res) {
  animals
      .get(req.params.id)
      .then((data) => {
        res.render('update-animal', {animal: data})
      })
}

export function update (req, res) {
  animals
      .update(req.params.id, req.body)
      .then((data) => {res.render('view-animal', { animal: data }) })
}


