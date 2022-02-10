import Head from 'next/head';

export default function TheoryEventResources() {
  return (
    <>
      <Head>
        <title>Theory Event Resources — SRVSO</title>
      </Head>
      <div className="mb-12">
        <h2 className="mb-4">Theory Event Resources</h2>
        <p className="text-lg">
          More details for each SRVSO 2022 theory event.
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
