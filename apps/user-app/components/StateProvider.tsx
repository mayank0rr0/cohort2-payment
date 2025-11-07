"use client"
import { ReactNode, useEffect } from "react"
import { useBalance, useTranx } from "@repo/store";
import type { OnRampTransaction, Balance } from "@repo/db";

interface StateProviderType {
    children : ReactNode;
    transactions: OnRampTransaction[] | null;
    balance: Pick<Balance, 'amount' | 'locked'> | null;
}


export const StateProvider = ( {children, balance, transactions} : StateProviderType ) => {
    const updateAmount = useBalance((s) => s.updateAmount);
    const amount = useBalance((s) => s.amount);
    const updateLocked = useBalance((s) => s.updateLocked)
    const locked = useBalance((s) => s.locked)
    const updateTranx = useTranx((s) => s.updateTransactions)
    const tranx = useTranx((s) => s.transactions)
    
    useEffect(() => {
        if ( balance && (balance.amount !== amount || balance.locked !== locked) ) {
            updateAmount(balance.amount);
            updateLocked(balance.locked);
        }
        if (transactions && transactions.length !== tranx.length) {
            updateTranx(transactions);
        }
    }, [balance, transactions, updateAmount, updateLocked, updateTranx, amount, locked, tranx])

    return <>
        {children}
    </>
}