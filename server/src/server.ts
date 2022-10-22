import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()
app.use(express.json())
app.use(cors()) /* Aberto a todos */

const prisma = new PrismaClient()

/* Gets */
/**
 * Retorna todos os Games
 */
app.get('/games', async (_request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })
  return response.json(games)
}) 

/**
 * Retorna todos os Ads de um Game passado pelo id
 */
app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  
  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      yearsPlaying: true,
      weekDays: true,
      hoursStart: true,
      hoursEnd: true,
      useVoiceChannel: true
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  
  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hoursStart),
      hoursEnd: convertMinutesToHourString(ad.hoursEnd)
    }
  }))
})

/**
 * Retorna o campo Discord de um Ad passado pelo id
 */
app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })
  
  return response.json({
    discord: ad.discord
  })
})

/* Posts */
/**
 * Cria um Ad em um Game passado pelo id
 */
app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const body = request.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hoursEnd: convertHourStringToMinutes(body.hoursEnd),
      discord: body.discord,
      useVoiceChannel: body.useVoiceChannel,
    }
  })
  
  return response.status(201).json(ad)
})

/* Configurações do deploy do server */
const hostname = '0.0.0.0'
const port = 3000
app.listen(port, hostname)