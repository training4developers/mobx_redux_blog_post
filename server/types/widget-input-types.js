import { GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';

const fields = () => ({
  name: { type: GraphQLString },
  description: { type: GraphQLString },
  color: { type: GraphQLString },
  size: { type: GraphQLString },
  quantity: { type: GraphQLInt },
});

export const insertWidgetInputType = new GraphQLInputObjectType({
  name: 'InputInsertWidget',
  description: 'Input type for inserts',
  fields,
});

export const updateWidgetInputType = new GraphQLInputObjectType({
  name: 'InputUpdateWidget',
  description: 'Input type for updates',
  fields: () => Object.assign(fields(), { id: { type: GraphQLID } }),
});

