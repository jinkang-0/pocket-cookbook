import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { ThemeContext } from "../ThemeContext";
import styles from "../styles/verification.module.css";
import globalStyles from "../styles/global.module.css";

function VerificationPage() {

    const cookies = new Cookies();
    const theme = useContext(ThemeContext);

    const [code, setCode] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('/api/verification')
            .then(res => {
                const r = res.data;
                setCode(r.code);
            })
            .catch(err => {
                console.log("Error:", err);
            });
    }, []);

    function onChange(e) {
        if (code.length === 6 && e.target.value === code) {
            cookies.set('verified', true, {path: '/', secure: true, sameSite: 'lax'});
            navigate('/recipes/add');
        }
    }

    return (
        <div className={`${styles.container} ${globalStyles[theme]}`}>
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
