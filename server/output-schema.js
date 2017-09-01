import fs from 'fs';
import path from 'path';
import { printSchema } from 'graphql';

import { schema } from './schema';

const schemaPath = path.resolve(__dirname, '../schema.graphql');
fs.writeFileSync(schemaPath, printSchema(schema));
console.log('Wrote Schema: ' + schemaPath);