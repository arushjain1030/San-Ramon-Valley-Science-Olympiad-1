import React, { useState } from 'react';
import Head from 'next/head';

const Resource = ({ title, url }) => (
  <div className="flex flex-col w-full mt-4 overflow-hidden h-96">
    <h4 className="mb-2 ml-3 text-lg">{title}</h4>
    <iframe
      title={title}
      src={url}
      className="flex-grow"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
    <a
      href={url}
      target="_blank"
      className="mt-2 text-sm text-center underline"
      rel="noopener noreferrer"
    >
      External link
    </a>
  </div>
);

const Dropdown = ({ title, isOpen, onClick, children }) => (
  <tr>
    <td colSpan="2" className="p-4 border border-gray-300">
      <h3 className="text-lg font-bold cursor-pointer" onClick={onClick}>
        {title} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && <div className="flex flex-col mt-4">{children}</div>}
    </td>
  </tr>
);

const InfoNight = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleDropdownChange = (dropdown) => {
    setSelectedDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const isDropdownOpen = (dropdown) => selectedDropdown === dropdown;

  return (
    <>
      <Head>
        <title> Relevant Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO 2023-24"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the relevant resources for SRVSO 2023-24
        </p>
        <p className="mt-7 text-md">
          Please note that SRVSO reserves the right to make changes to these
          resources. In the event of changes, coaches will be notified.
        </p>
      </div>

      <table className="w-full mb-12 border border-collapse border-gray-300">
        <tbody>
          <Dropdown
            title="Coach Seminar Resources"
            isOpen={isDropdownOpen('coachSeminars')}
            onClick={() => handleDropdownChange('coachSeminars')}
          >
            <Resource
              title="Coach Seminar Recording"
              url="https://youtu.be/a3S1uAecDCw?start=0"
            />
            <Resource
              title="Coach Seminar Slideshow"
              url="https://docs.google.com/presentation/d/1u4MfIuJXKpeNIvC4qVA6ec1dvpyN-XPjLLpySHa2_44/edit?usp=sharing"
            />
          </Dropdown>

          <Dropdown
            title="Build Event Resources"
            isOpen={isDropdownOpen('build')}
            onClick={() => handleDropdownChange('build')}
          >
            <Resource
              title="Build Event Procedures"
              url="https://docs.google.com/document/d/1Dq27ksp3ssEQrFe00rZLx3--q2VPGesD52tOQxSiV-c/edit?usp=sharing"
            />
            <Resource
              title="Build Binder Layout"
              url="https://docs.google.com/document/d/156RDs3zBXIMM_Jo1zJhWP-U9FNh9ep3KpehBtnjqoIQ/edit?usp=sharing"
            />
            <Resource
              title="Ongoing Build Event Revisions Document"
              url="https://docs.google.com/document/d/1qV_YtQ_7fSj3qGfSaASM06K58hQjQBH77Fjya2IqFXA/edit?usp=sharing"
            />
          </Dropdown>

          <Dropdown
            title="Theory Event Resources"
            isOpen={isDropdownOpen('theoryWorkUps')}
            onClick={() => handleDropdownChange('theoryWorkUps')}
          >
            <Resource
              title="Theory Work Ups 2023-24"
              url="https://docs.google.com/document/d/1WfQSRBK3WtowQqfmGwmbq3BZ1dawqYzmjUX-FbjHz1s/edit?usp=sharing"
            />
          </Dropdown>

          <Dropdown
            title="Instant Challenge Resources"
            isOpen={isDropdownOpen('challenges')}
            onClick={() => handleDropdownChange('challenges')}
          >
            <Resource
              title="Instant Challenge"
              url="https://docs.google.com/document/d/1Jek9plxE4Q8C4N9cHGVvsaH51FfZcoc02QiXuYdc-Dc/edit?usp=sharing"
            />
            <Resource
              title="Flutterball"
              url="https://docs.google.com/document/d/1TH7vwsHvxVmkWS1cX_vXxpSmwvVY9qgiLTBhS70BYko/edit?usp=sharing"
            />
            <Resource
              title="Ring That Bell"
              url="https://docs.google.com/document/d/1vw46Tx20i91Y4lOs_H4aDc_pibbaHlvvNNO_v_bD-tk/edit?usp=sharing"
            />
          </Dropdown>
        </tbody>
      </table>
    </>
  );
};

export default InfoNight;
