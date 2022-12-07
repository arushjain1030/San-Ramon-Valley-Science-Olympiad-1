import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function InfoNight() {
  return (
    <>
      <Head>
        <title> Relevant Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO 2022-23"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the relevant resources for SRVSO 2022-23
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mt-6 text-lg">Coach Seminar Slideshow</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/coachseminar.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/presentation/d/1BWCf6aSb2jhby0JQZwUL7Eg-mLxUeXgCFBawQNAn7zg/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Build Event Procedures</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/buildevent.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1lQpYZ7lNUq0EOwuhcM06zo73lumJ5suv4ty1K6Uwjn4/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Instant Challenge</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/instantc.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1xHNXYC7u9aARrfY0obKJ8XoHKp6fGvVsrNybgoNfvg0/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">100th Floor Cathedral</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/floorcath.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/1Pf-RAQqcGTdDNEYSTXhaB-q5rDVVDj2fcLgeiMGsx5E/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>

        <h3 className="mt-6 text-lg">Theory Work Ups 22-23</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/theorywork.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="https://docs.google.com/document/d/10qw43wElrUTeb-d-ayywS1f-X7KOXPlhpgVqx16Ls6A/edit"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
        {/* <h2 className="mb-4">2022 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 4th annual SRVSO was held at Windemere Ranch Middle School in
          April 2022.
        </p> */}
      </div>

      {/* <div className="mb-12">
        <h2 className="mb-4">2021 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 3rd annual SRVSO was held online in March 2021.
        </p>
        <h3 className="text-lg">Images</h3>
        <Carousel
          className="relative mt-2 sm:mt-12"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">Results</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/2021 San Ramon Valley Science Olympiad Score Release.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="/documents/2021 San Ramon Valley Science Olympiad Score Release.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div> */}

      {/* <div className="mb-12">
        <h2 className="mb-4">2020 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 2nd annual SRVSO was held online in May 2020.
        </p>
        <h3 className="text-lg">Images</h3>
        <Carousel
          className="relative mt-2 sm:mt-12"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">Results</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/2020 San Ramon Valley Science Olympiad Score Release.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="/documents/2020 San Ramon Valley Science Olympiad Score Release.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
      </div> */}

      {/* <div className="mb-12">
        <h2 className="mb-4">2019 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 1st annual SRVSO was held at Dougherty Valley High School in April
          2019.
        </p>
        <h3 className="text-lg">Images</h3>
        <Carousel
          className="relative mt-2 sm:mt-12"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <img
            src="/images/carousel/DSC_0055_3_15.jpg"
            alt="Carousel"
            className="object-contain"
          />
          <Image
            src="/images/carousel/DSC_0084_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0089_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0207_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0232_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0238_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0309_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0315_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0320_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0483_15.jpg"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">
          <a
            href="https://drive.google.com/file/d/13Y2B6ch1quXKbUTTueKREkZ36zc5Kx4z/view"
            target="_blank"
            className="mt-4 underline"
            rel="noopener noreferrer"
          >
            Results
          </a>
        </h3>
      </div> */}
    </>
  );
}
