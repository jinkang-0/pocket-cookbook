import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import styles from "../styles/verification.module.css";

function VerificationPage() {

    const cookies = new Cookies();

    const [code, setCode] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCode() {
            const res = await fetch('/db/verification');
            const r = await res.json();
            setCode(r.code);
        }

        fetchCode();
    }, []);

    function onChange(e) {
        if (code.length === 6 && e.target.value === code) {
            cookies.set('verified', true, {path: '/', secure: true, sameSite: 'lax'});
            navigate('/recipes/add');
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <h2>Enter the verification code to continue</h2>
                <div className={styles.code}>
                    <input type="text" name="code" id="code" onChange={onChange} maxLength={6} spellCheck={false} />
                </div>
            </div>
        </div>
    );
}

export default VerificationPage;
