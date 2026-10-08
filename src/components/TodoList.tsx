import React from 'react';
import { Todo as TodoType } from '../types/Todo';
import { Todo } from './Todo';

type Props = {
  todos: TodoType[];
  isLoading: boolean;
};

export const TodoList: React.FC<Props> = ({ todos, isLoading }) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} isLoading={isLoading} />
      ))}
    </section>
  );
};
