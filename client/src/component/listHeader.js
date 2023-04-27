import styles from "./listHeader.module.css"
const ListHeader =()=>{
    return (
      <div className={styles.master}>
        <div>ID</div>
        <div>NAME</div>
        <div>BRANCH</div>
        <div>CGP</div>
      </div>
    );
}
export default ListHeader;