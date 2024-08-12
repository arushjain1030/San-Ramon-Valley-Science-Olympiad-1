import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'nuka-carousel';

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
      </div>
    </>
  );
}
