import { create } from "zustand";

interface ProviderOptionType {
    name: string,
    url : string
}

export interface useTransferState {
    options : ProviderOptionType[];
    amount : number;
    selectedProvider : ProviderOptionType 
}

interface useTransferAction {
    updateAmount : (amount : useTransferState['amount']) => void
    updateProvider : (selectedProvider : useTransferState['selectedProvider']) => void 
    init: () => void
}

export const useTransfer = create<useTransferState & useTransferAction>((set, get) => ({
    options : [
        {
            name : "HDFC Bank",
            url : "http://localhost:3001" 
        }
    ],
    amount: 0,
    selectedProvider : { name: "", url : ""},
    updateAmount : (amount) => set(() => ({amount: amount})),
    updateProvider: (selectedProvider) => set(() => ({selectedProvider: selectedProvider})),
    
    // for setting selectedURL oterwise error of options undefined while nextjs renders it on client side
    init: () => set((s) => ({
        selectedProvider: s.options[0] ?? { name: "", url : ""}
    }))
}))

useTransfer.getState().init();
