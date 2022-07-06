export default {
  $id: 'https://ditrit.io/schemas',
  type: 'object',
  properties: {
    provider: { $ref: '#/definitions/provider' },
  },
  definitions: {
    provider: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        required: { type: 'boolean' },
        providerType: { type: 'string' },
        orderResources: { type: 'array' },
        modules: { $ref: '#/definitions/modules' },
        resources: { $ref: '#/definitions/resources' },
      },
      required: ['name', 'providerType', 'resources'],
    },
    modules: {
      type: 'object',
      properties: {
        representation: { type: 'string' },
        source: { type: 'object' },
        resources: { type: 'object' },
        icon: { type: 'string' },
      },
      required: ['source', 'representation', 'icon'],
    },
    resources: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          resourceType: { type: 'string' },
          representation: { type: 'string' },
          attributes: {
            type: 'array',
            items: { $ref: '#/definitions/variables' },
          },
          icon: { type: 'string' },
        },
        required: ['resourceType', 'representation', 'icon'],
      },
    },
    variables: {
      type: 'object',
      properties: {
        variableName: { type: 'string' },
        resourceType: { type: 'string' },
        representation: { type: 'string' },
        array: { type: 'boolean' },
        required: { type: 'boolean' },
        widget: { type: 'string' },
        min: { type: 'integer' },
        max: { type: 'integer' },
        options: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      required: ['variableName', 'widget'],
    },
  },
  required: ['provider'],
};
