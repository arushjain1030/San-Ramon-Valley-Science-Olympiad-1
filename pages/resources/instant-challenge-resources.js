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
          The slide decks from our past informational meetings.
        </p>
      </div>
      <div className="flex flex-col w-full overflow-hidden h-96">
        <iframe
          title="SRVSO Presentation"
          src="https://docs.google.com/presentation/d/e/2PACX-1vSaO1EsfG4m2G92mzTrgvUBZ4_S7Wqtx1XCwwp7ndQjm01KxH5J6ASryEF79r1urQhTLk5_j06HesVv/embed"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="flex-grow"
        />
      </div>
    </>
  );
}
