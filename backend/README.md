# Dhee Mentorship contact API

## Setup

1. Create a MongoDB Atlas cluster and database user. In Atlas Network Access, allow the IP address where the API will run.
2. From this directory, run `npm install`.
3. Copy `.env.example` to `.env` and replace `MONGODB_URI` with your Atlas connection string. URL-encode special characters in the database password.
4. Start the API with `npm run dev` (or `npm start` for production).
5. Start the React app from the repository root with `npm run dev`. Vite proxies `/api` to port 3001.

The contact page sends `POST /api/contact` with `name`, `email`, `service`, and `message`. Valid submissions are saved in the `contacts` collection in the `dhee_mentorship` database. `GET /api/health` reports API and database status.

For deployment, set these environment variables at the API host and set `FRONTEND_ORIGIN` to the public frontend origin. Configure the frontend host to proxy `/api` to this service, or change the frontend request to use the public API base URL.

Never commit `.env` or expose the Atlas connection string in the React app.

The API uses Cloudflare and Google DNS (`1.1.1.1,8.8.8.8`) by default for Atlas SRV lookups. Override this with `DNS_SERVERS` if your network requires different DNS resolvers.
