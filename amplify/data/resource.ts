import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  Todo: a
    .model({
      content: a.string().required(),
      done: a.boolean().default(false),
    })
    .authorization((allow) => [allow.owner()]),
})

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
})
