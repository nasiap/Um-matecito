import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function setup() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || ''
    });

    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
        console.log(`Database ${process.env.DB_NAME} created or already exists.`);

        await connection.changeUser({ database: process.env.DB_NAME });

        const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        await connection.query(createUsersTable);
        console.log('Users table checked/created.');

        const createOrdersTable = `
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        amount DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        stripe_payment_intent_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `;
        await connection.query(createOrdersTable);
        console.log('Orders table checked/created.');

    } catch (err) {
        console.error('Error setting up database:', err);
    } finally {
        await connection.end();
    }
}

setup();
