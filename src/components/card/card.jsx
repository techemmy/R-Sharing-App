import styles from "./card.module.css";
const Card = (resource) => {
  return (
    <article className={styles.cta}>
      <img
        src="https://images.unsplash.com/photo-1569762825621-2dab96140a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDkxMQ&ixlib=rb-1.2.1&q=80&w=400"
        alt=""
      />

      <div className={styles["cta__text-column"]}>
        <small>{resource.course_code}</small>
        <h1 className={styles.h1}>{resource.course_name}</h1>
        <button>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">
            Preview
          </a>
        </button>
      </div>
    </article>
  );
};

export default Card;
