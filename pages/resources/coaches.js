import Head from 'next/head';

export default function Coaches() {
  return (
    <>
      <Head>
        <title>Coaches — SRVSO</title>
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Coaches</h2>
        <p className="text-lg">
          The recorded video and slide deck of the coach's seminar.
        </p>
      </div>
      <section className="flex flex-col w-full overflow-hidden h-96">
        <iframe
          title="SRVSO Coach's Seminar"
          src="https://drive.google.com/file/d/1UGZPKF5Nh-BsCGHz3oY4P9EC3z595omi/preview"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow border border-gray-700 rounded-md"
        />
      </section>
      <section className="flex flex-col w-full px-1 py-6 mt-12 overflow-hidden bg-gray-200 rounded-md h-[700px]">
        <iframe
          title="SRVSO Coach's Seminar Slideset"
          src="https://docs.google.com/presentation/d/1zrS4nwnWhDoL59i5AhhG8xdm6AiZ_XE3rOdBGZzP7lM/edit?usp=sharing"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
      </section>
    </>
  );
}
