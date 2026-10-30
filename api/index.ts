import Fastify from 'fastify';

// Import or initialize your Fastify application instance
import app from '../src/main'; // Adjust if your main instance export path differs

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit('request', req, res);
};
