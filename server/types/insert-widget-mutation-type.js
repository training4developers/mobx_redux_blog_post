import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId, offsetToCursor } from 'graphql-relay';

import { Viewer } from '../models/graphql-models';
import { viewerType } from './viewer-type';
import { widgetsEdgeType } from '../connections/widget-connection';
import { insertWidgetType } from './widget-input-types';

import { WidgetData } from '../models/widget-data';

export const insertWidgetMutationType = mutationWithClientMutationId({

  // mutation arguments ( url params + request body )
  // input InsertWidgetInput {
  //   widget: InsertWidget
  //   clientMutationId: String
  // }

  // mutation result ( response body )
  // type InsertWidgetPayload {
  //   viewer: Viewer
  //   widgetEdge: WidgetsEdge
  //   clientMutationId: String
  // }  
  name: 'InsertWidget',

  // populate arguments [ input InsertWidgetInput ] 
  inputFields: () => ({
    widget: { type: insertWidgetType },
    clientMutationId: { type: GraphQLString },
  }),

  // first perform the mutation
  // second send back the result
  // first parameter corresponds to the input fields
  // second parameter corresponds to the context of graphql
  mutateAndGetPayload: ({ widget }, { baseUrl }) => {
    const widgetData = new WidgetData(baseUrl);
    // result of this code, will be the input to resolve functions down below
    // return widgetData.insert(widget).then(widget => Object.assign(new Widget(), widget));
    return Promise.reject('the world ended');
  },

  outputFields: () => {

    return {
      viewer: {
        type: viewerType,
        // receives arguments from mutateAndGetPayload
        resolve: () => Object.assign(new Viewer(), { id: 1 }),
      },
      widgetEdge: {
        type: widgetsEdgeType,
        // receives arguments from mutateAndGetPayload
        resolve: (widget, _, { baseUrl}) => {
          const widgetData = new WidgetData(baseUrl);
          return widgetData.all().then(widgets => {
            const widgetIndex = widgets.findIndex(w => w.id === widget.id);
            return {
              // relay-specific to know where to place the edge in the connection
              cursor: offsetToCursor(widgetIndex),
              // self-evident
              node: widget,
            };
          });
        },
      },
    };
  },
});