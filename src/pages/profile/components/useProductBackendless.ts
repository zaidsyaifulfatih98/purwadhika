import { useEffect, useState } from 'react';
import Backendless from '../../../../lib/BackendlessTokopedia';

export interface Product {
  objectId?: string;
  name: string;
  price: number;
  city: string;
  imageurl: string;
}

export function useProductsBackendless() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Backendless.Data.of<Product>('Products').find({ properties: ['name', 'price', 'city', 'imageurl'] })
      .then((result) => setProducts(result))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}