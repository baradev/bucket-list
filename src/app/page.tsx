import { cookieBasedClient } from '@/utils/aplify-utils'

export default async function Home() {
  const { data: todos } = await cookieBasedClient.models.Todo.list({
    selectionSet: ['content', 'id'],
    authMode: 'userPool',
  })

  console.log('todos', todos)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">List Of All Tasks</h1>
      {todos?.map(async (todo, idx) => (
        <div key={idx}>
          <div>{todo.content}</div>
        </div>
      ))}
    </main>
  )
}
