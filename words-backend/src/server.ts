import dotenv from 'dotenv';
import { Server } from 'http';

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config();
import app from './app';


let server: Server;
(async () => {

    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'http//localhost';
    server = app.listen(port, () => {
        console.log(`App running on port ${host}:${port} ...`);
    });
})().catch((err: Error) => {
    console.error(err);
});

process.on('unhandledRejection', (err: Error) => {
    console.log('UNHANDLED REJECTION!💥💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => process.exit(1));
});

//! uncaughtException

process.on('SIGTERM', () => {
    console.log(`👋 SIGTERM RECEIVED. Shutting down gracefully`);
    server.close(() => {
        console.log(`💥 Process terminated!`);
    });
});
