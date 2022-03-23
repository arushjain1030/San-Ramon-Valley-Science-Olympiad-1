import Head from 'next/head';

export default function BuildEventResources() {
  return (
    <>
      <Head>
        <title>Build Event Resources — SRVSO</title>
        <meta
          name="description"
          content="More details for each SRVSO 2022 build event."
        />
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Build Event Resources</h2>
        <p className="text-lg">More details for each SRVSO 2022 build event.</p>
      </div>

      <div className="px-8 my-8 border border-gray-800 py-9">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="pb-0.5 text-lg font-medium text-gray-100">
              &#10031;
            </span>
          </div>
          <p className="text-gray-400">Build Event Descriptions</p>
        </div>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Build Event Descriptions"
            src="/documents/SRVSO Build Event Descriptions.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="/documents/SRVSO Build Event Descriptions.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div>
    </>
  );
}
