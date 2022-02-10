import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — SRVSO</title>
        <meta
          name="description"
          content="Ask questions about the event and get in touch with the team."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Contact</h2>
        <p className="text-lg">
          Ask questions about the event and get in touch with the team.
        </p>
      </div>
      <section className="flex flex-col w-full px-1 py-6 overflow-hidden bg-gray-200 rounded-md h-96">
        <iframe
          title="SRVSO Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOoND17uRMjH3uPnuSHqGGLfs9Qj5FIN83VZdj9L-N9BVIZw/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOoND17uRMjH3uPnuSHqGGLfs9Qj5FIN83VZdj9L-N9BVIZw/viewform?embedded=true"
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
