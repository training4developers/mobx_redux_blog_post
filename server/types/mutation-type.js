import { GraphQLObjectType } from 'graphql';

import { insertWidgetMutationType } from './insert-widget-mutation-type';
import { updateWidgetMutationType } from './update-widget-mutation-type';
import { deleteWidgetMutationType } from './delete-widget-mutation-type';

export const mutation = new GraphQLObjectType({

  name: 'Mutation',

  fields: () => ({

    insertWidget: insertWidgetMutationType,
    updateWidget: updateWidgetMutationType,
    deleteWidget: deleteWidgetMutationType,

  }),

});
