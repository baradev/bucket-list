import { isAuthenticated, cookieBasedClient } from '@/utils/aplify-utils'
import Todo from '@/components/Todo'
import { onDelete, onToggleDone } from './_actions/actions'
import { redirect } from 'next/navigation'

export default async function Home() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect('/signin')
    return null
  }

  const { data: todos } = await cookieBasedClient.models.Todo.list({
    selectionSet: ['content', 'id', 'done', 'description'],
    authMode: 'userPool',
  })

  console.log('todos', 'description', todos)

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">Current wishes</h1>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={{
            ...todo,
            done: todo.done ?? false,
            description: todo.description ?? '',
          }}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
        />
      ))}
    </main>
  )
}
