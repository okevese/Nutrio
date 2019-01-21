FROM node:8


LABEL version="1.0"
LABEL description="Nutrio"

MAINTAINER okevese@gmail.com
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["npm", "start"]
