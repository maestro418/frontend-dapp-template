import React, {
    createContext,
    useContext,
    useReducer,
    useMemo,
} from "react";
import { useWallet } from "use-wallet2";


const BlockchainContext = createContext();

export function useBlockchainContext() {
    return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

const INIT_STATE = {
    signer: null,
    price: 0,
    ETHPrice: 0,
    interval: null,
};

export default function Provider({ children }) {
    const wallet = useWallet();
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return (
        <BlockchainContext.Provider
            value={useMemo(
                () => [state, { dispatch, BuyToken, ClaimToken }],
                [state, BuyToken]
            )}
        >
            {children}
        </BlockchainContext.Provider>
    );
}
