import { create } from 'zustand'
import {User} from "@/type";
type AuthState = {
    isAuthenticated: boolean;
    user: User| null;
    isLoading: boolean;

    setIsAuthenticated: (value: AuthState) => void;

}
const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}))
