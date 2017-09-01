import { GraphQLInt } from 'graphql';
import { connectionDefinitions } from 'graphql-relay';

import { widgetType } from '../types/widget-type';

export const { connectionType: widgetConnectionType, edgeType: widgetEdgeType } =
  connectionDefinitions({

    name: 'Widget',

    nodeType: widgetType,

    // example of adding more data to the connection
    connectionFields: () => ({
      totalCount: {
        type: GraphQLInt
      }
    }),

  });
