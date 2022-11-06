import styles from './Reviews.module.css';
import Video from './Video/Video';

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <h2 className={`heading-2 ${styles.heading}`}>Отзывы</h2>
            <Video src='/reviews/marina.mp4' />
            <Video src='/reviews/alexander.mp4' />
            <Video src='/reviews/nata.mp4' />
            <Video src='/reviews/anna.mp4' />
        </section>
    );
};

export default Reviews;
