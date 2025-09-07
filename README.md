# Express + Sequelize + MySQL REST API


This repository contains a minimal REST API built with Express, Sequelize and MySQL.


## Setup


1. Install dependencies:


```bash
npm install
```


2. Create `.env` from `.env.example` and set your DB credentials.


3. Create the database in MySQL (example):


```sql
CREATE DATABASE test_db;
```


4. Run in development (will call `sequelize.sync()` to create tables automatically):


```bash
npm run dev
```


## API Endpoints


- `GET /api/users` - list users
- `POST /api/users` - create user `{ name, email, age }`
- `GET /api/users/:id` - get user by id
- `PUT /api/users/:id` - update user
- `DELETE /api/users/:id` - delete user


## Notes


- Do not use `sequelize.sync({ force: true })` in production — it will drop tables.
- For production, use migrations and more robust error handling.