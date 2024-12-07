import styles from "./FAQsList.module.css";
import { useState } from "react";
import {SupportFAQ} from "./FAQsListData";

const FAQsList = () => {
  const [idValue, setId] = useState(null);

  const onQuestionClick = (e) => {
    const value = Number(e.currentTarget.id);

    value === idValue ? setId(null) : setId(Number(value));
  };

  return (
    <>
          <div className={styles.accordion}>
            {SupportFAQ.map((pair, index) => {
              return (
                <div
                  key={index}
                  className={` ${styles.accordion_content} ${
                    idValue === index ? styles.active : ""
                  }`}
                >
                  <div
                    onClick={onQuestionClick}
                    id={index}
                    className={styles.question}
                  >
                    {/* <span
                      style={{ backgroundColor: backgroundColor, color: color }}
                      className={styles.serialNumber}
                    > 
                      {index + 1}
                    </span> */}
                    <p className={styles.questionContent}>{pair.question}</p>
                  </div>
                  <div
                    id={index}
                    className={styles.answer}
                  >
                    {pair.answer}
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default FAQsList;
