FROM node:16

WORKDIR /usr/src/app

COPY tsconfig*.json ./
COPY package*.json ./


RUN npm install --force 

RUN npm install -g @nestjs/cli


RUN npm install -g typescript@latest

RUN  npm update -g typescript

COPY . .

#RUN nest build
RUN npm run build
CMD ["npm", "run", "start:prod"]
