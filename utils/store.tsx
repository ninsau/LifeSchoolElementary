import create from "zustand";

export const stateStore = create((set: any) => ({
  open: false,
  setOpen: (val: Boolean) => set((state: Boolean) => ({ open: val })),
}));
