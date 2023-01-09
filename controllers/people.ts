import { Request, Response } from 'express'
import Person from '../models/person'

export const getPeople = async (req: Request, res: Response) => {
  try {
    const people = await Person.findAll()
    res.json(people)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Internal server error, contact API administrator',
    })
  }
}

export const getPerson = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const person = await Person.findByPk(id)
    if (person) {
      res.json(person)
    } else {
      res.status(404).json({
        msg: `Person with id ${id} not found`,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Internal server error, contact API administrator',
    })
  }
}

export const createPerson = async (req: Request, res: Response) => {
  const { body } = req
  try {
    const person = await Person.create({
      name: body.name,
      height: body.height,
      mass: body.mass,
      hair_color: body.hair_color,
      skin_color: body.skin_color,
      url: body.url,
    })
    res.json(person)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Internal server error, contact API administrator',
    })
  }
}

export const updatePerson = async (req: Request, res: Response) => {
  const { id } = req.params
  const { body } = req
  try {
    const result = await Person.update(
      {
        name: body.name,
        height: body.height,
        mass: body.mass,
        hair_color: body.hair_color,
        skin_color: body.skin_color,
        url: body.url,
      },
      {
        where: {
          id,
        },
      }
    )
    if (Number(result) === 1) {
      res.json({
        msg: `Person with id ${id} updated`,
      })
    } else {
      res.status(404).json({
        msg: `Person with id ${id} not found`,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Internal server error, contact API administrator',
    })
  }
}

export const deletePerson = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const result = await Person.destroy({
      where: {
        id,
      },
    })
    console.log('Result: ' + result)
    if (result) {
      res.json({
        msg: `Person with id ${id} deleted`,
      })
    } else {
      res.status(404).json({
        msg: `Person with id ${id} not found`,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Internal server error, contact API administrator',
    })
  }
}
