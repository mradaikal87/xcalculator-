import React, { useState } from "react";
import styles from "./Calculater.module.css";

export default function Calculater() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const number = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("0");
    } else if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <h1>React Calculator</h1>
        <input
          type="text"
          value={input}
          className={styles.input}
          placeholder="0"
          readOnly
        />
        <div className={styles.result}> {result}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className={styles.grid}>
            {number.map((item, index) => (
              <button
                key={index}
                className={styles.btn}
                onClick={() => handleClick(item)}
                data-testid={
                  item === "+"
                    ? "add-btn"
                    : item === "-"
                    ? "subtract-btn"
                    : item === "*"
                    ? "multiply-btn"
                    : item === "/"
                    ? "divide-btn"
                    : item === "="
                    ? "equal-btn"
                    : item === "C"
                    ? "clear-btn"
                    : `btn-${item}`
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
