import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Homepage from './globals/Homepage'
import ContactSubmissions from './collections/ContactSubmissions'
import ContactFormConfig from './blocks/ContactFormConfig'

export default buildConfig({
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost/restroworks',
  }),
  editor: lexicalEditor(),
  collections: [Users, Media, ContactSubmissions],
  globals: [Homepage],
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  sharp,
  cors: [
    'http://localhost:3001',
    'http://localhost:3000',
    process.env.FRONTEND_URL || 'http://localhost:3001',
  ],
  localization: {
    locales: ["en", "es"],
    defaultLocale: "en",
    fallback: true,
  },
});
