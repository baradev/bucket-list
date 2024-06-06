import { redirect } from 'next/navigation'
import { isAuthenticated, cookieBasedClient } from '@/utils/aplify-utils'
import Todo from '@/components/Todo'
import { onDelete } from './_actions/actions'

export default async function Home() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect('/signin')
    return null
  }

  const { data: todos } = await cookieBasedClient.models.Todo.list({
    selectionSet: ['content', 'id'],
    authMode: 'userPool',
  })

  console.log('todos', todos)

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">List Of All Tasks</h1>
      {todos?.map((todo, idx) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} idx={idx} />
      ))}
    </main>
  )
}
