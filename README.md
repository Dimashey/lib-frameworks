# Lib and frameworks
Example full stack project

## Prerequiroments
- [Make](https://www.gnu.org/software/make/#download) - took for start project
- [NodeJs](https://nodejs.org/en/download/package-manager) v20.16.0 - javascript runtime to run project
- [Docker](https://docs.docker.com/get-started/get-docker/) - containarization tool
- [Docker compose](https://docs.docker.com/compose/install/) - tool for composing several docker containers

## Technologies

- Frontend: [Angular](https://angular.dev/) v18
- Backend: [NestJs](https://nestjs.com/) v10
- Database: [Postgresql](https://www.postgresql.org/) v17

## Project structure 

```
lib-frameworks/
├── server/                  <-- backend
│   ├── src/
│   ├── .env
│   ├── Dockerfile.dev
│   └── Dockerfile.prod
├── client/                  <-- frontend
│   ├── src/
│   ├── .env
│   ├── Dockerfile.dev
│   └── Dockerfile.prod
├── docker-compose.base.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── Makefile 
```


## How start project

1. Create enviroment foler with .env.database file.
create environment variables.
Example:
```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

2. Inside client folder create .env file
Example:
```
API_ENDPOINT=
```

2. Inside server folder create .env file
Example:
```
PORT=
DB_HOST=
DB_PORT=
JWT_SECRET=
```

## Start app

### Development

1. Go to client, then run `npm i`
2. Go to server, then run `npm i`
3. Navigate to the root of project and run `make dev`

### Production

Navigate to the root of project and run `make prod`