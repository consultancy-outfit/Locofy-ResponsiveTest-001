FROM node:20-alpine
WORKDIR /app
COPY package.json . 
RUN npm install
COPY . . 
EXPOSE 3000
<<<<<<< HEAD
CMD ["npm", "run", "dev"]
=======
CMD ["npm", "run", "dev"]
>>>>>>> be5537a28a304d1eecf4b773b56caf043ca1f166
