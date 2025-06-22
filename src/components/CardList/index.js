import Card from "../Card";
import styles from "./index.module.css";

const CardList = ({data,tab}) => {
    return <div className={styles.container}>
        {data?.map((item,index)=><div className={styles.card_container} key={index+":"+tab}><Card  data={item} tab={tab}/></div>)}
        {/* <div className={styles.card_container}>
            <Card/>
        </div>
        <div className={styles.card_container}>
            <Card/>
        </div> */}
    </div>
};
export default CardList;