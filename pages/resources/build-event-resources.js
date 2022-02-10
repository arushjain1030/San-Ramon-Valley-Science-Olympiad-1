import Head from 'next/head';

export default function BuildEventResources() {
  return (
    <>
      <Head>
        <title>Build Event Resources — SRVSO</title>
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
            title="Barge Building"
            src="https://docs.google.com/document/d/e/2PACX-1vQtVR-1KoZv_R6dK8KKR-Els4JxJXMgIRz46L6qiD4bFAwtPI0yeb8Kax-E1nrycmNWX8reZyPb1hJh/pub"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQtVR-1KoZv_R6dK8KKR-Els4JxJXMgIRz46L6qiD4bFAwtPI0yeb8Kax-E1nrycmNWX8reZyPb1hJh/pub"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div>

      <div
        className="px-8 my-8 border border-gray-800 py-9"
        id="barge-building"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">1</span>
          </div>
          <p className="text-gray-400">Barge Building</p>
        </div>
        <p className="px-12">
          * Here is an example of how the event will generally proceed. Note
          that the procedures and materials shown in this example is not what
          will be used for SRVSO.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Barge Building"
            src="https://www.gvsu.edu/cms4/asset/AF5F8044-C1CA-D385-2E8007C14930B056/barge_building_activity_description.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://www.gvsu.edu/cms4/asset/AF5F8044-C1CA-D385-2E8007C14930B056/barge_building_activity_description.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div>

      <div className="px-8 my-8 border border-gray-800 py-9" id="tin-can-racer">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">2</span>
          </div>
          <p className="text-gray-400">Tin Can Racer</p>
        </div>
        <p className="px-12">
          * Here is an example of how the event will generally proceed. Note
          that the procedures and materials shown in this example is not what
          will be used for SRVSO.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Tin Can Racer"
            src="https://player.vimeo.com/video/79846665?h=d5c681bafe"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://player.vimeo.com/video/79846665?h=d5c681bafe"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div>

      <div
        className="px-8 my-8 border border-gray-800 py-9"
        id="popsicle-stick-bridge"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">3</span>
          </div>
          <p className="text-gray-400">Popsicle Stick Bridge</p>
        </div>
        <p className="px-12">
          * Here is an example of how the event will generally proceed. Note
          that the procedures and materials shown in this example is not what
          will be used for SRVSO.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Popsicle Stick Bridge"
            src="https://www.garrettsbridges.com/tag/science-olympiad"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://www.garrettsbridges.com/tag/science-olympiad"
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
