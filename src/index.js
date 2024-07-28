import { setupServer } from './server.js';
import { initMongoDB } from './db/initMongoConnection.js';

setupServer();

const bootstrap = async () => {
  await initMongoConnection();
  startServer();
};

bootstrap();


