import { create } from 'zustand'

const INITIAL_PAGE = 1

type Store = {
  pageCount: number;
  inc: () => void;
  reset: () => void;
}

export const useGlobalStore = create<Store>()((set) => ({
  pageCount: INITIAL_PAGE,
  inc: () => set((state) => ({ pageCount: state.pageCount + 1 })),
  reset: () => set(() => ({ pageCount: INITIAL_PAGE })),
}))