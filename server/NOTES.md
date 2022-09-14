# Estrutura do backend

## Entidades

- Game
  - id (pk)
  - title
  - bannerUrl

- Ad
  - id (pk)
  - gameId (fk)
  - name
  - yearsPlaying
  - weekDays
  - hoursStart
  - hoursEnd
  - discord
  - useVoiceChannel
  - createdAt

## Casos de uso

- Listagem dos jogos
- Listagem de anúncios
- Criar um anúncio
- Buscar discord pelo ID do anúncio
