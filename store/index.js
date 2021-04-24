import create from "zustand";

const useStore = create((set) => ({
  residence: null,
  block: null,
  flat: "",
  address: null,
  loading: false,
  setResidence: (r) => set((state) => ({ residence: r })),
  setBlock: (b) => set((state) => ({ block: b })),
  setFlat: (f) => set((state) => ({ flat: f })),
  setAddress: (a) => set((state) => ({ address: a })),
  setLoading: (l) => set((state) => ({ loading: l })),
}));

export default useStore;
