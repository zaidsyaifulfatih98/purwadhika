import { useEffect, useState } from 'react';
import Backendless from '../../../../lib/BackendlessTodo';

export interface Product {
  objectId?: string;
  text: string;
  completed: boolean;
  
}

export function useTodoBackendless() {
  const [todo, setTodo] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Backendless.Data.of<Product>('Products').find()
      .then((result) => setTodo(result))
      .finally(() => setLoading(false));
  }, []);

  return { todo, loading };
}