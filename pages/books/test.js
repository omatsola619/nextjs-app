import styles from "../../styles/test.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
};

const Test = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <a className={styles.single}>
            <h4>{person.name}</h4>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Test;
