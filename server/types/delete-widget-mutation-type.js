import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

import { WidgetData } from '../models/widget-data';
import { Viewer, Widget } from '../models/graphql-models';
import { viewerType } from './viewer-type';
import { widgetType } from './widget-type';

export const deleteWidgetMutationType = mutationWithClientMutationId({

  name: 'DeleteWidget',

  inputFields: {
    widgetId: { type: GraphQLString },
  },

  outputFields: {
    viewer: {
      type: viewerType,
      resolve: () => Object.assign(new Viewer(), { id: 1 }),
    },
    widget: {
      type: widgetType,
      resolve: (widget) => widget
    }
  },

  mutateAndGetPayload: ({ widgetId }, { baseUrl }) => {
    const localWidgetId = fromGlobalId(widgetId).id;
    const widgetData = new WidgetData(baseUrl);
    return widgetData.delete(localWidgetId).then(widget => Object.assign(new Widget(), widget));
  },

});