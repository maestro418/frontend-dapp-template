import React, { useState, useEffect } from "react";
import { useWallet } from "use-wallet2";
import { useBlockchainContext } from "../context";


export default function Main() {
    const wallet = useWallet();


    return (
        <div className="dashboard">
            <section className="footer container">
                <p>Copyright &copy; {new Date().getFullYear()}</p>
            </section>
            {/* End Footer */}
        </div>
    );
}
