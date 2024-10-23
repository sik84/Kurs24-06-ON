import Standard_Button from "../../commons/buttons/Standard_Button";
import styles from "./Navbar.module.css";

function Navbar() {
  function onClickServus() {
    alert("Servus!");
  }

  function onClickHello() {
    alert("Hello");
  }

  return (
    <div className={styles.navbar}>
      <Standard_Button onClick={onClickServus}>{"Servus!"}</Standard_Button>
      <Standard_Button onClick={onClickHello}>{"Hello!"}</Standard_Button>
    </div>
  );
}

export default Navbar;
