import { create } from "zustand";

export interface useTransferState {
    options : {
        name: string,
        url : string
    }[];
    amount : number;
    selectedUrl : string 
}

interface useTransferAction {
    updateAmount : (amount : useTransferState['amount']) => void
    updateUrl : (selectedUrl : useTransferState['selectedUrl']) => void 
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
    selectedUrl : "",
    updateAmount : (amount) => set(() => ({amount: amount})),
    updateUrl: (selectedUrl) => set(() => ({selectedUrl: selectedUrl})),
    
    // for setting selectedURL oterwise error of options undefined while nextjs renders it on client side
    init: () => set((s) => ({
        selectedUrl: s.options[0]?.url ?? ""
    }))
}))

useTransfer.getState().init();
