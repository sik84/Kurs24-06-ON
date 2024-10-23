import styles from "./Standard_Button.module.css"
function Standard_Button({children, onClick}) {
    return (
      <button onClick={onClick} className={styles.standard_button}>{children}</button>
    );
  }
  
  export default Standard_Button;