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
          content="Here's where you can find all the relevant resources for SRVSO 2024-25"
        />
      </Head>

      <div className="mb-12">
        <h2 className="mb-4">Resources</h2>
        <p className="text-lg">
          Here's where you can find all the relevant resources for SRVSO 2024-25
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
              title="Pre-Olympiad Logistics Meeting Recording"
              url="https://www.youtube.com/watch?v=2AUfNh94DHA"
            />
            <Resource
              title="Pre-Olympiad Logistics Meeting Slideshow"
              url="https://docs.google.com/presentation/d/1bTBVHahOFCrlyrDC6aEQbnn_26N5nkg58GOX8u-rn2A/edit?usp=sharing"
            />
            <Resource
              title="FAQ & Coach Updates Meeting Recording"
              url="https://www.youtube.com/watch?v=ltlNetiM0HM"
            />
            <Resource
              title="FAQ & Coach Updates Meeting Slideshow"
              url="https://docs.google.com/presentation/d/17x8bMlJ0ITuIRCLMIGEZjknErmJUfs0UdBYluDEtlX0/edit?usp=sharing"
            />
            {/* <Resource
              title="Coach Seminar Recording"
              url="https://youtu.be/VC91kNpkWfA"
            />
            <Resource
              title="Coach Seminar Slideshow"
              url="https://docs.google.com/presentation/d/1vMHRZzEu2xw9pe_a0qhr1TNiGAybyhoHaUJM7crbpFQ/edit#slide=id.p"
            /> */}
          </Dropdown>
          <Dropdown
            title="General Olympiad Resources"
            isOpen={isDropdownOpen('generalResources')}
            onClick={() => handleDropdownChange('generalResources')}
          >
            <Resource
              title="Ongoing Revisions Document"
              url="https://docs.google.com/document/d/12X718Gz_cq1JlPig9cZaIK0j2u7zxO1e_3hoFl-sg0I/edit?usp=sharing"
            />
            <Resource
              title="Preliminary Event Overview & Master Team Schedule"
              url="https://docs.google.com/spreadsheets/d/1qdNMBuYarUpvKMX_aguzJqUfVO5J_G_44J1NGZ-tq44/edit?usp=sharing"
            />
          </Dropdown>
          <Dropdown
            title="Build Event Resources"
            isOpen={isDropdownOpen('build')}
            onClick={() => handleDropdownChange('build')}
          >
            <Resource
              title="Build Event Procedures"
              url="https://docs.google.com/document/d/1s0Uae24bHKJWMPrjrvEMrV7Eecj2zAQyOo1GljKF5kY/edit?tab=t.0"
            />
            <Resource
              title="Build Event Walkthrough Steps"
              url="https://docs.google.com/document/d/18Q0kbrqp9fwWVCaF3JMzeMEwoA-5GVUb3ZhWtYex_Uc/edit?usp=sharing"
            />
            <Resource
              title="Build Binder Layout"
              url="https://docs.google.com/document/d/1E71PVyiMQ9WHKBvtvKV_0KG4rQ_j-5bBO93WSM815Nw/edit?tab=t.0"
            />
            <Resource
              title="Example Build Binder"
              url="https://docs.google.com/document/d/10kYKd-bEw8MuJ4XK4QHmtZlG248d6M1sRcNQw5wjkgs/edit?usp=sharing"
            />
          </Dropdown>

          <Dropdown
            title="Theory Event Resources"
            isOpen={isDropdownOpen('theoryWorkUps')}
            onClick={() => handleDropdownChange('theoryWorkUps')}
          >
            <Resource
              title="Theory Work Ups 2024-25"
              url="https://docs.google.com/document/d/1eIpQWulA_ZYRrrUqRTUVxcaDBs_aiKndI68_6tp2fNA/edit?tab=t.0"
            />
          </Dropdown>

          <Dropdown
            title="Instant Challenge Resources"
            isOpen={isDropdownOpen('challenges')}
            onClick={() => handleDropdownChange('challenges')}
          >
            <Resource
              title="Instant Challenge Walkthrough Steps"
              url="https://docs.google.com/document/d/1NtcIdsybGCIAGmxrScbx5fcs6MN_ZbqvvTklz2M-oKI/edit?tab=t.0"
            />
            <Resource
              title="Tower of Terror Practice Event"
              url="https://docs.google.com/document/d/1Q_Lsb5fLW63MvTs22X2RCS4PCN6bQNwYw5ZiPzoifyg/edit?tab=t.0"
            />
            <Resource
              title="Float-A-Boat Practice Event"
              url="https://docs.google.com/document/d/1DabNoRNTxIBtJioa0DIcG9x4dF1_BiK0uvx4Wl2YRBU/edit?tab=t.0"
            />
          </Dropdown>
        </tbody>
      </table>
    </>
  );
};

export default InfoNight;
