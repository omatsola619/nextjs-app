import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Omash App | Home</title>
    </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          rem autem quibusdam cum suscipit, nesciunt facilis pariatur id sunt
          dolorum ipsum velit dicta atque nemo assumenda numquam qui delectus
          sit nobis expedita accusamus, animi blanditiis, eum iste! Sequi, ipsum
          nobis.
        </p>
        <Link href="/books/test">
          <a className={styles.btn}>see omash Listing</a>
        </Link>
      </div>
    </>
  );
}
