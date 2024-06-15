FROM node:18

WORKDIR /app

COPY README.md ./
COPY public ./public
COPY components.json ./
COPY tsconfig.json ./
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]