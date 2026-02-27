import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type User = {
  email: string;
  name: string;
  role: string;
};

type UseAuthStore = {
  user: User;
  setAuth: ({ email, name, role }: User) => void;
};

export const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      user: {
        email: '',
        name: '',
        role: '',
      },
      setAuth: ({ email, name, role }: User) =>
        set((state: UseAuthStore) => ({ user: { email, name, role } })),
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);