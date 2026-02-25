import mysql from 'mysql2/promise';

async function test() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ''
        });
        console.log('Connected to MySQL successfully!');
        await connection.end();
    } catch (err) {
        console.error('Connection failed:', err.message);
    }
}

test();
