import Head from 'next/head';

export default function RegisterNow() {
  return (
    <>
      <Head>
        <title>Register Now</title>
        <meta
          name="description"
          content="This page contains vital information about registering for the 2023-2024 SRVSO Info Night"
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">2023-24 SRVSO Info Night Registration</h2>
        <p className="text-lg">
          This page contains vital information about registering for the
          2023-2024 SRVSO Info Night
        </p>
      </div>
      {/* <h3 className="mt-20 text-lg">
        Please review this entire document to understand the registration
        process.
      </h3> */}
      {/* <div className="flex flex-col w-full h-96">
        <iframe
          title="SRVSO Presentation"
          src="https://docs.google.com/document/d/1lAy0sDWO7MWHjSa-NkmJXOg50h70kCrVCOFhv4Y48kQ/edit?usp=sharing"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/document/d/1lAy0sDWO7MWHjSa-NkmJXOg50h70kCrVCOFhv4Y48kQ/edit?usp=sharing"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </div> */}
      {/* <h3 className="mt-20 text-lg">
        Note: Only Team Coaches Fill Out This Form
      </h3> */}
      <h3 className="mt-20 text-lg">
        Fill Out This Form To Register for the Info Night
      </h3>
      <section className="flex flex-col w-full px-1 overflow-hidden bg-gray-200 rounded-md py-7 h-96">
        <iframe
          title="SRVSO Information Release Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScVfxdBdq1xapqZAvo3Vaf4E8ALZgUClGbGH87kc6S0KPB5bw/viewform"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScVfxdBdq1xapqZAvo3Vaf4E8ALZgUClGbGH87kc6S0KPB5bw/viewform"
          target="_blank"
          className="mt-2 text-sm text-center underline"
          rel="noopener noreferrer"
        >
          External link
        </a>
      </section>
    </>
  );
}
