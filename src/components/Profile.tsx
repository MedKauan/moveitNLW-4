import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://pbs.twimg.com/profile_images/1333910669817679874/rT4jXJ3I_400x400.jpg" alt="Kauan Medeiros" />
      <div>
        <strong>Kauan Medeiros</strong>
        <p>
          <img src="icons/level.svg" alt="" />
            Level 1
        </p>
      </div>
    </div>
  );
}