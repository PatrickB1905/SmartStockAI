import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Secure headers—with CSP relaxed for Playground assets
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          // Allow CDN scripts and inline scripts for Playground
          scriptSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
          // Allow inline styles and Google Fonts & CDN CSS
          styleSrc: [
            "'self'",
            "'unsafe-inline'",
            'https://fonts.googleapis.com',
            'https://cdn.jsdelivr.net'
          ],
          // Allow images from self, data URIs, and CDN
          imgSrc: ["'self'", 'data:', 'https://cdn.jsdelivr.net'],
          // Allow connections to the GraphQL endpoint
          connectSrc: ["'self'", 'http://localhost:4000', 'ws://localhost:4000'],
          // Allow Google Fonts font files
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        },
      },
    }),
  );

  // Enable CORS for frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  console.log(`🚀 API running on port ${process.env.PORT || 3000}`);
}

bootstrap();
