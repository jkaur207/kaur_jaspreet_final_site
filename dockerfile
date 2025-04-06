# Stage 1: Build the React app
FROM node:18 AS build
WORKDIR /kaur_jaspreet_final_site
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the production build using Nginx
FROM nginx:alpine
COPY --from=build /kaur_jaspreet_final_site/build /usr/share/nginx/html
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]
