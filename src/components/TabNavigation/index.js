import styles from "./index.module.css";

const TabNavigation = ({onTabClick,currentTab}) => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={currentTab === 0 ? `${styles.tab} ${styles.tab_active}` : styles.tab} onClick={() => onTabClick(0)}>
                <div>
                    For All
                </div>
                <div>
                    
                </div>
            </div>
            <div className={currentTab === 1 ? `${styles.tab} ${styles.tab_active}` : styles.tab} onClick={() => onTabClick(1)}>
                <div>
                    For Event Organizers
                </div>
                <div>
                    
                </div>
            </div>
            <div className={currentTab === 2 ? `${styles.tab} ${styles.tab_active}` : styles.tab} onClick={() => onTabClick(2)}>
                <div>
                    For Members
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <div className={styles.horizontal_line}></div>
    </div>
};

export default TabNavigation;