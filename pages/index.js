import Link from 'next/link';
import Image from 'next/image';
import Button from '@components/Button';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiBookCover, GiHumanPyramid } from 'react-icons/gi';
import { IoPeopleCircle } from 'react-icons/io5';
import Carousel from 'nuka-carousel';

export default function Home() {
  return (
    <>
      <h1 className="mt-16 heading">San Ramon Valley Science Olympiad</h1>
      <div className="flex justify-center mt-6 space-x-4">
        <FaFacebook className="w-6 h-6 text-gray-500 hover:text-gray-300" />
        <FaTwitter className="w-6 h-6 text-gray-500 hover:text-gray-300" />
        <FaInstagram className="w-6 h-6 text-gray-500 hover:text-gray-300" />
      </div>
      <Link href="/registration">
        <a>
          <Button className="mx-auto mt-16">Register for SRVSO 2022</Button>
        </a>
      </Link>
      <div className="flex max-w-3xl mx-auto mt-44 gap-x-6">
        <div className="w-3 bg-green-600" />
        <div>
          <h2 className="mb-4">Welcome to SRVSO!</h2>
          <p className="leading-relaxed">
            SRVSO provides students with the chance to explore the world of STEM
            in a competitive setting. Science Olympiad prepares the young
            generation for success in future years of middle school, high
            school, and beyond.
          </p>
        </div>
      </div>
      <section className="flex justify-between max-w-3xl mx-auto mt-32 gap-x-12">
        <div className="flex flex-col items-center flex-1 px-4 pt-6 pb-8 text-gray-400 transition-transform transform bg-gray-900 border-b-4 border-green-600 hover:scale-105 gap-y-4">
          <GiBookCover className="w-12 h-12 text-gray-200" />
          <p className="text-center">
            Curriculum aligned with Common Core and Next generation science
            standards.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1 px-4 pt-6 pb-8 text-gray-400 transition-transform transform bg-gray-900 border-b-4 border-green-600 hover:scale-105 gap-y-4">
          <IoPeopleCircle className="w-12 h-12 text-gray-200" />
          <p className="text-center">
            Promotes life skills such as organization, leadership, confidence,
            team work and more.
          </p>
        </div>
        <div className="flex flex-col items-center flex-1 px-4 pt-6 pb-8 text-gray-400 transition-transform transform bg-gray-900 border-b-4 border-green-600 hover:scale-105 gap-y-4">
          <GiHumanPyramid className="w-12 h-12 text-gray-200" />
          <p className="text-center">
            Work in a team of peers to be rewarded for the pursuit of scientific
            achievement.
          </p>
        </div>
      </section>

      <section>
        <Carousel
          className="relative mt-32"
          autoplay
          pauseOnHover
          swiping
          wrapAround
        >
          <Image
            src="/images/carousel/DSC_0055.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
            priority
          />
          <Image
            src="/images/carousel/DSC_0084.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0089.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0207.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0232.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0238.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0309.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0315.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0320.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
          <Image
            src="/images/carousel/DSC_0483.jpg"
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
        </Carousel>
      </section>
    </>
  );
}
