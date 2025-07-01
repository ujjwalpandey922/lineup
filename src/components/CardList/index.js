import Card from '../Card';
import styles from './index.module.css';

const CardList = ({ data, tab }) => {
  return (
    <div className={styles.container}>
      {data?.map((item, index) => (
        <Card data={item} index={index} tab={tab} key={index + ':' + tab} />
      ))}
    </div>
  );
};
export default CardList;
