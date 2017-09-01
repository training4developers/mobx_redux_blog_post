import { GraphQLSchema } from 'graphql';

import { query } from './types/query-type';
import { mutationType as mutation } from './types/mutation-type';

export const schema = new GraphQLSchema({
  query, mutation
});
