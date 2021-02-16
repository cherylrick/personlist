import Head from "next/head"

const About = () => {
    return ( 
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
                <meta name="keywords" content="persons" />
                <title>Person List | About</title>
            </Head>
            <div>
                <h1>About</h1>
                <p>This application fetches a list of people by name, email address and city. </p>
                <p>The application is created with NEXT JS. The data are fetched from an api - <a href="https://jsonplaceholder.typicode.com/users">JSON Placeholder</a>.</p>
                <p>Free fake API for testing and prototyping.</p>
                <h2>
                When to use?
                </h2>
                <p>
                JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.
                </p>
            </div>
        </>
     );
}
 
export default About;