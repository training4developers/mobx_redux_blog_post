import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { nodeInterface } from '../utils/node-definitions';
import { registerType } from '../utils/resolve-type';

import { Widget } from '../models/graphql-models';
import { WidgetData } from '../models/widget-data';

export const widgetType = new GraphQLObjectType({

  name: 'Widget',

  fields: () => ({
    id: globalIdField('Widget'),
    name: {
      description: 'the name of the widget',
      type: GraphQLString },
    description: { type: GraphQLString },
    color: { type: GraphQLString },
    size: { type: GraphQLString },
    quantity: { type: GraphQLInt },
  }),

  interfaces: () => [nodeInterface]

});

const widgetData = new WidgetData('http://locahost:3010/widgets');
registerType(Widget, widgetType, id => {
  return widgetData.one(id).then(widget => Object.assign(new Widget(), widget));
});
