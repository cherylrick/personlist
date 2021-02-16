import styles from "../../styles/Persons.module.css"
import Link from "next/link"
import Head from "next/head"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { persons: data}
    }
}

const Persons = ({persons}) => {
    return ( 
        <>
        <Head>
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
            <meta name="keywords" content="persons" />
            <title>Person List | Name List</title>
        </Head>
        <div>
            <h1>All Persons</h1>
            {persons.map(person => (
                <Link href={"/persons/" + person.id} key={person.id}>
                    <a className={styles.single}>
                        <h3>{ person.name } </h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Persons;
