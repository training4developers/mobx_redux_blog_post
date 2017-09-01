import { GraphQLObjectType } from 'graphql';
import { globalIdField, connectionArgs, connectionFromArray } from 'graphql-relay';

import { nodeInterface } from '../utils/node-definitions';
import { registerType } from '../utils/resolve-type';

import { widgetConnectionType } from '../connections/widget-connection';

import { Viewer, Widget } from '../models/graphql-models';
import { WidgetData } from '../models/widget-data';

export const viewerType = new GraphQLObjectType({

  name: 'Viewer',

  fields: () => ({
    id: globalIdField('Viewer'),
    widgets: {
      type: widgetConnectionType,
      description: 'A list of widgets',
      args: connectionArgs,
      resolve: (_, args, { baseUrl }) => {

        // create widget data object to retrieve data from rest service
        const widgetData = new WidgetData(baseUrl);

        // must return a promise to delay resolution until the async
        // operation has completed
        return widgetData.all().then(widgetsData => {

          // create an array of widget models
          const widgets = widgetsData.map(w => Object.assign(new Widget(), w));

          // create a connection object from the array of data, and
          // the user supplied args
          // typically, this will return a subset of the array
          const connection = connectionFromArray(widgets, args);

          // populating the connection object with additional data
          connection.totalCount = widgets.length;

          // return the connection object to be used to populate the
          // connection type
          return connection;
        });
      }
    }
  }),

  interfaces: () => [nodeInterface]

});

registerType(Viewer, viewerType, id => Object.assign(new Viewer(), { id }));
