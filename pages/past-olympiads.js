import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function PastOlympiads() {
  return (
    <>
      <Head>
        <title>Past Olympiads — SRVSO</title>
        <meta
          name="description"
          content="A gallery of past olympiads, with pictures and results."
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Past Olympiads</h2>
        <p className="text-lg">
          A gallery of past olympiads, with pictures and results.
        </p>
      </div>

      <div className="mb-12">
        {/* <h2 className="mb-4">2022 Olympiad</h2>
        <p className="mb-4 text-lg">
          The 4th annual SRVSO was held at Windemere Ranch Middle School in
          April 2022.
        </p> */}
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
            src="/images/carousel/1.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/2.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/3.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/4.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/5.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/6.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/7.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/8.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/9.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/10.png"
            alt="Carousel"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
        <h3 className="mt-6 text-lg">Results</h3>
        <div className="flex flex-col w-full mt-2 overflow-hidden h-96">
          <iframe
            title="Results"
            src="/documents/2022 San Ramon Valley Science Olympiad Score Release.pdf"
            className="flex-grow"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <a
            href="/documents/2022 San Ramon Valley Science Olympiad Score Release.pdf"
            target="_blank"
            className="mt-2 text-sm text-center underline"
            rel="noopener noreferrer"
          >
            External link
          </a>
        </div>
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
