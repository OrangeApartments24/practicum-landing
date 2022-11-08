import styles from './Reviews.module.css';
import Video from './Video/Video';

const Reviews = () => {
    return (
        <section className={styles.reviews}>
            <h2 className={`heading-2 ${styles.heading}`}>
                Отзывы участников «Чата по делу»
            </h2>
            <Video
                src='/reviews/marina.mp4'
                poster='/reviews_posters/marina.jpg'
            />
            <Video
                src='/reviews/alexander.mp4'
                poster='/reviews_posters/alexander.jpg'
            />
            <Video src='/reviews/nata.mp4' poster='/reviews_posters/nata.jpg' />
            <Video src='/reviews/anna.mp4' poster='/reviews_posters/anna.jpg' />
        </section>
    );
};

export default Reviews;
