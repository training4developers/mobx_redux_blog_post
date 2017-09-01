import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';

import { WidgetData } from '../models/widget-data';
import { Viewer, Widget } from '../models/graphql-models';

import { updateWidgetInputType } from './widget-input-types';
import { viewerType } from './viewer-type';
import { widgetType } from './widget-type';

export const updateWidgetMutationType = mutationWithClientMutationId({

  name: 'UpdateWidget',

  inputFields: {
    widget: {
      type: updateWidgetInputType
    }
  },

  outputFields: {
    viewer: {
      type: viewerType,
      resolve: () => Object.assign(new Viewer(), { id: 1 }),
    },
    widget: { type: widgetType },
  },

  mutateAndGetPayload: ({ widget }, { baseUrl }) => {
    widget.id = fromGlobalId(widget.id).id;
    const widgetData = new WidgetData(baseUrl);
    return widgetData.update(widget).then(widget =>
      ({ widget: Object.assign(new Widget(), widget) })
    );
  },

});
