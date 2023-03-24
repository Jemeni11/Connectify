import Head from "next/head";

const Fallback = () => (
  <>
    <Head>
      <title>ContactHub | You're offline!</title>
    </Head>
    <h1>This is ContactHub's offline fallback page</h1>
    <h2>
      You are currently not connected to the internet. Please connect and try
      again.
    </h2>
  </>
);

export default Fallback;
