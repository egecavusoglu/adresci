import create from "zustand";

const useStore = create((set) => ({
  residence: null,
  block: null,
  flat: null,
  address: null,
  setResidence: (r) => set((state) => ({ residence: r })),
  setBlock: (b) => set((state) => ({ block: b })),
  setFlat: (f) => set((state) => ({ flat: f })),
  setAddress: (a) => set((state) => ({ address: a })),
}));

export default useStore;
