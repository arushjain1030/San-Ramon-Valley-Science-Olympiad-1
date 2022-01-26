import Link from 'next/link';
import Button from '@components/Button';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
      <div className="flex px-12 mt-40 gap-x-6">
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
    </>
  );
}
