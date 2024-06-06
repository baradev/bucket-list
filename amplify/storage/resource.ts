import { defineStorage } from '@aws-amplify/backend'

export const storage = defineStorage({
  name: 'amplifyBucketListStorage',
  access: (allow) => ({
    'media/*': [allow.authenticated.to(['read', 'write', 'delete'])],
  }),
})
