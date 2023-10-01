// The code you provided uses the zustand library to create a custom hook called useRegisterModal.
// This custom hook manages the state and functionality related to a modal for a registration form.

import { create } from "zustand";
//create a store

//store interface for ts
interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
//The set function is used to update the state in the store.
//The second argument is an object that defines the initial state of the store.
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;

