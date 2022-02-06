import Head from 'next/head';

export default function BuildEventResources() {
  return (
    <>
      <Head>
        <title>Build Event Resources — SRVSO</title>
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Build Event Resources</h2>
        <p className="text-lg">
          The slide decks from our past informational meetings.
        </p>
      </div>

      <div className="px-8 border border-gray-800 py-7" id="barge-building">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">1</span>
          </div>
          <p className="text-gray-400">Barge Building</p>
        </div>
        <iframe
          title="2022 SRVSO Registration"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbZ5d-hc0W7CFUxAdRuZv7DoApduASPIp70TnjW2_mVG3_KA/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
      </div>

      <div className="px-8 my-8 border border-gray-800 py-7" id="tin-can-racer">
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">2</span>
          </div>
          <p className="text-gray-400">Tin Can Racer</p>
        </div>
        <iframe
          title="2022 SRVSO Registration"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbZ5d-hc0W7CFUxAdRuZv7DoApduASPIp70TnjW2_mVG3_KA/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
      </div>

      <div
        className="px-8 border border-gray-800 py-7"
        id="popsicle-stick-bridge"
      >
        <div className="flex items-center mb-6 gap-x-2">
          <div className="grid w-8 h-8 bg-gray-700 rounded-full place-items-center">
            <span className="text-lg font-medium text-gray-100">3</span>
          </div>
          <p className="text-gray-400">Popsicle Stick Bridge</p>
        </div>
        <iframe
          title="2022 SRVSO Registration"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbZ5d-hc0W7CFUxAdRuZv7DoApduASPIp70TnjW2_mVG3_KA/viewform?embedded=true"
          marginHeight="0"
          marginWidth="0"
          className="flex-grow"
        />
      </div>
    </>
  );
}
