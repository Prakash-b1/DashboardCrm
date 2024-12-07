import styles from "./Inputbox.module.css";

const Inputbox = ({type,placeholder}) =>{
    return(
        <>
            <input type={type?type:"text"} placeholder={placeholder}
                className={styles.profileInput}
            />
        </>
    )
}
export default Inputbox;