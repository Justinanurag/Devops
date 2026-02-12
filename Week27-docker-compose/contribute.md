##Manual Installation
-Install nodejs locally()
-clone the repo
-install dependencies(npm i)
-start the DS locally()
    -docker run -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
    Or
    -Go to neon.tech and get yourself a new Db
-Change the .env file and update your Db credentials
-npx prisma migrate
-npx prisma generate
-npm run build 
-npm run start 


##Docker installation
-install docker
-Start postgres
    -docker run -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
-Build the image -`docker build -t user-project`
-Start the images-`docker run -p 3000:3000 user-project`

##Docker  Compose installation steps
-install docker,docker compose
-Run `docker-compose up` 
