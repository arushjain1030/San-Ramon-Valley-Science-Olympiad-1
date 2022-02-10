import Head from 'next/head';

export default function InstantChallengeResources() {
  return (
    <>
      <Head>
        <title>Instant Challenge Resources — SRVSO</title>
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Instant Challenge Resources</h2>
        <p className="text-lg">
          Examples of possible Instant Challenges (to be used in preparation for
          SRVSO).
        </p>
      </div>

      <div
        className="px-8 my-8 border border-gray-800 py-9"
        id="100th-floor-cathedral"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">1</span>
          </div>
          <p className="text-gray-400">100th Floor Cathedral</p>
        </div>
        <p className="px-12">
          * This is just a possible example of an instant challenge that will be
          administered on the day of the event.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="100th Floor Cathedral"
            src="https://docs.google.com/document/d/e/2PACX-1vTzQI0xlbMn9m5siSqO-4jZGCsRN9h0Yfuileeb5e76Ar7wu6gfmfZ1BGeqZ5_NqPHrbu9qpG1TE1CX/pub?embedded=true"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vTzQI0xlbMn9m5siSqO-4jZGCsRN9h0Yfuileeb5e76Ar7wu6gfmfZ1BGeqZ5_NqPHrbu9qpG1TE1CX/pub?embedded=true"
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
        id="Slide for Life"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">2</span>
          </div>
          <p className="text-gray-400">Slide for Life</p>
        </div>
        <p className="px-12">
          * This is just a possible example of an instant challenge that will be
          administered on the day of the event.
        </p>
        <div className="flex flex-col w-full mt-8 overflow-hidden h-96">
          <iframe
            title="Slide for Life"
            src="https://docs.google.com/document/d/e/2PACX-1vRfCtvQd0WUkWheMc4RwqFqMiJpLQath5KRidCRs4g4pOVKnF08Wy9bHRoxixQathC1zvG1j-1CCOde/pub?embedded=true"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRfCtvQd0WUkWheMc4RwqFqMiJpLQath5KRidCRs4g4pOVKnF08Wy9bHRoxixQathC1zvG1j-1CCOde/pub?embedded=true"
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
