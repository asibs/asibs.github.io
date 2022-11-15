import React from 'react';
import './App.css';

import SectionHeader from './components/SectionHeader';
import SkillBadge from './components/SkillBadge';
import SkillSection from './components/SkillSection';
import Timeline from './components/Timeline';
import TimelineSection from './components/TimelineSection';

import profileImage from './assets/images/profile-pic.jpg';
import degreesLogo from './assets/images/38degrees.png';
import ocadoLogo from './assets/images/ocado-technology.png';
import organiseLogo from './assets/images/organise.png';

import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowPathRoundedSquareIcon,
  ArrowSmallRightIcon,
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  BugAntIcon,
  BuildingOfficeIcon,
  CircleStackIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  ViewColumnsIcon,
} from '@heroicons/react/20/solid';

import { ReactComponent as AnsibleIcon } from './assets/icons/ansible.svg';
import { ReactComponent as AwsIcon } from './assets/icons/aws.svg';
import { ReactComponent as BootstrapIcon } from './assets/icons/bootstrap.svg';
import { ReactComponent as CassandraIcon } from './assets/icons/cassandra.svg';
import { ReactComponent as CssIcon } from './assets/icons/css.svg';
import { ReactComponent as DockerIcon } from './assets/icons/docker.svg';
import { ReactComponent as GitIcon } from './assets/icons/git.svg';
import { ReactComponent as GitHubIcon } from './assets/icons/github.svg';
import { ReactComponent as HerokuIcon } from './assets/icons/heroku.svg';
import { ReactComponent as HtmlIcon } from './assets/icons/html.svg';
import { ReactComponent as JavaIcon } from './assets/icons/java.svg';
import { ReactComponent as JavascriptIcon } from './assets/icons/javascript.svg';
import { ReactComponent as LinkedInIcon } from './assets/icons/linkedin.svg';
import { ReactComponent as NextJsIcon } from './assets/icons/nextjs.svg';
import { ReactComponent as OpenSourceIcon } from './assets/icons/opensource.svg';
import { ReactComponent as PostgresIcon } from './assets/icons/postgres.svg';
import { ReactComponent as RailsIcon } from './assets/icons/rails.svg';
import { ReactComponent as ReactIcon } from './assets/icons/react.svg';
import { ReactComponent as RedisIcon } from './assets/icons/redis.svg';
import { ReactComponent as RubyIcon } from './assets/icons/ruby.svg';
import { ReactComponent as VagrantIcon } from './assets/icons/vagrant.svg';

function App() {
  return (
    <div className="App">

      {/***** MAIN CONTENT CONTAINER *****/}
      <div className="container max-w-screen-xl mx-auto flex flex-col gap-12 px-5 py-8 items-center print:max-w-[90%] print:px-0 print:py-0">

        <div className="hidden print:block w-full">
          <p className="text-right px-5">
            View this page online at <a href="https://asibs.github.io/" className="underline text-blue-900">asibs.github.io</a>
          </p>
        </div>

        {/***** INTRO / ABOUT SECTION *****/}
        <section className="text-gray-600">
          <div className="container mx-auto flex flex-col md:flex-row justify-items-center">

            <div className="w-full md:w-1/6 md:max-w-xs mb-10 md:mb-0">
              <img className="mx-auto max-w-[150px] xl:max-w-[200px] object-cover object-center rounded-[32px]" alt="Profile" src={profileImage}></img>
            </div>

            <div className="flex flex-col md:w-5/6 lg:flex-grow md:pl-10 lg:pl-15">
              <div className="items-center text-center md:items-start md:text-left">
                <h1 className="text-2xl xl:text-3xl mb-4 font-medium text-gray-900">
                  Andrew Sibley
                </h1>

                <p className="text-xl font-semibold leading-relaxed mb-3">
                  Senior fullstack engineer with expertise in backend systems
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 text-center md:text-left text-sm mb-6">
                <div className="min-w-fit">
                  <EnvelopeIcon className="h-6 w-6 text-blue-500 inline pr-1"/>
                  sibs.andrew@gmail.com
                </div>

                <div className="min-w-fit">
                  <PhoneIcon className="h-6 w-6 text-blue-500 inline pr-1"/>
                  +44 7851 486059
                </div>

                <div className="min-w-fit">
                  <HomeIcon className="h-6 w-6 text-blue-500 inline pr-1"/>
                  London, UK
                </div>

                <div className="min-w-fit">
                  <BuildingOfficeIcon className="h-6 w-6 text-blue-500 inline pr-1"/>
                  15 years professional experience
                </div>

                <div className="min-w-fit">
                  <AcademicCapIcon className="h-6 w-6 text-blue-500 inline pr-1"/>
                  BSc 1st Computing, Imperial College
                </div>
              </div>

              <div className="text-left">
                <p className="leading-relaxed mb-3">
                  I have professional experience in varied organisations - from building robotic control
                  systems with hundreds of engineers at a large company, to building tech-for-good web apps
                  at an early stage start-up with only a couple of devs.
                </p>
                <p className="leading-relaxed mb-3">
                  I am well-versed in automating, optimising, and scaling up systems & organisations -
                  whether through code, infrastructure, business processes, or a combination. I have years
                  of experience building, enhancing, maintaining and re-platforming large & complex systems.
                </p>
                <p className="leading-relaxed">
                  I am motivated & inspired by making the world a better place through innovation. I would be
                  especially excited to help solve challenges related to climate change and democracy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/***** KEY SKILLS SECTION *****/}
        <section className="text-gray-600">
          <div className="container mx-auto w-full flex flex-col justify-items-center">
            <SectionHeader className="mb-4">
              Key Technical Skills
            </SectionHeader>

            <div className="grid grid-cols-5 items-center gap-4 w-full">

              <SkillSection name="Languages&nbsp;/ Frameworks">
                <SkillBadge className="bg-sky-100 text-gray-700">
                  <RubyIcon className="h-6 w-6 inline pr-2" /> Ruby
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <RailsIcon className="h-6 w-6 inline pr-2" /> Ruby on Rails
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <JavascriptIcon className="h-6 w-6 inline pr-2" /> Javascript
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <ReactIcon className="h-6 w-6 inline pr-2" /> React
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <NextJsIcon className="h-6 w-6 inline pr-2" /> NextJS
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <BootstrapIcon className="h-6 w-6 inline pr-2" /> Bootstrap
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <HtmlIcon className="h-6 w-6 inline pr-2" /> HTML
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <CssIcon className="h-6 w-6 inline pr-2" /> CSS
                </SkillBadge>

                <SkillBadge className="bg-sky-100 text-gray-700">
                  <JavaIcon className="h-6 w-6 inline pr-2" /> Java
                </SkillBadge>
              </SkillSection>

              <SkillSection name="Databases">
                <SkillBadge className="bg-violet-100 text-gray-700">
                  <AwsIcon className="h-6 w-6 inline pr-2" /> AWS RDS & Redshift
                </SkillBadge>

                <SkillBadge className="bg-violet-100 text-gray-700">
                  <PostgresIcon className="h-6 w-6 inline pr-2" /> PostgreSQL & PostGIS
                </SkillBadge>

                <SkillBadge className="bg-violet-100 text-gray-700">
                  <RedisIcon className="h-6 w-6 inline pr-2" /> Redis
                </SkillBadge>

                <SkillBadge className="bg-violet-100 text-gray-700">
                  <CassandraIcon className="h-6 w-6 inline pr-2" /> Cassandra
                </SkillBadge>
              </SkillSection>

              <SkillSection name="Infrastructure">
                <SkillBadge className="bg-rose-100 text-gray-700">
                  <AwsIcon className="h-6 w-6 inline pr-2" /> AWS
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <HerokuIcon className="h-6 w-6 inline pr-2" /> Heroku
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <VagrantIcon className="h-6 w-6 inline pr-2" /> Vagrant
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <AnsibleIcon className="h-6 w-6 inline pr-2" /> Ansible
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <DockerIcon className="h-6 w-6 inline pr-2" /> Docker
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <GitIcon className="h-6 w-6 inline pr-2" /> Git
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <GitHubIcon className="h-6 w-6 inline pr-2" /> GitHub
                </SkillBadge>

                <SkillBadge className="bg-rose-100 text-gray-700">
                  <CommandLineIcon className="h-6 w-6 inline pr-2" /> Bash
                </SkillBadge>
              </SkillSection>

              <SkillSection name="Methodologies">
                <SkillBadge className="bg-emerald-100 text-gray-700">
                  <ArrowPathRoundedSquareIcon className="h-6 w-6 inline pr-2" /> Agile
                </SkillBadge>

                <SkillBadge className="bg-emerald-100 text-gray-700">
                  <ViewColumnsIcon className="h-6 w-6 inline pr-2" /> Kanban
                </SkillBadge>

                <SkillBadge className="bg-emerald-100 text-gray-700">
                  <UserGroupIcon className="h-6 w-6 inline pr-2" /> Scrum
                </SkillBadge>

                <SkillBadge className="bg-emerald-100 text-gray-700">
                  <BeakerIcon className="h-6 w-6 inline pr-2" /> Test Driven Development
                </SkillBadge>
              </SkillSection>
            </div>
          </div>
        </section>

        {/***** PROFESSIONAL EXPERIENCE SECTION *****/}
        <section className="text-gray-600">
          <SectionHeader>
            Professional Experience
          </SectionHeader>

          <Timeline>
            <TimelineSection
              lineColorClass="from-violet-100"
              iconBorderClass="border-4 border-violet-100"
              imageSrc={organiseLogo}
              imageAlt="Organise logo"
              className="pb-12"
            >
              <div className="mb-6">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  <a href="https://www.organise.network/" target="_blank" rel="noreferrer">
                    Organise <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                  </a>
                </h3>
                <p className="inline text-sm pl-4">
                  An early-stage tech-for-good startup, building an app to empower workers
                </p>
              </div>

              <div className="mb-1">
                <h4 className="inline font-medium title-font text-sm md:text-base text-gray-700">Lead Engineer</h4>
                <p className="inline text-sm pl-4">August 2021 - Present</p>
              </div>

              <p className="leading-relaxed pl-4">
                I am responsible for architecting, building & maintaining the software that enables hundreds of
                thousands of users to take action on workers rights campaigns. I currently have a focus on the
                backend systems, for example, developing plans to migrate functionality from legacy systems to
                the new app.
              </p>
            </TimelineSection>

            <TimelineSection
              lineColorClass="from-orange-100"
              iconBorderClass="border-4 border-orange-100"
              imageSrc={degreesLogo}
              imageAlt="38 Degrees logo"
              className="pb-12"
            >
              <div className="mb-6">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  <a href="https://home.38degrees.org.uk/" target="_blank" rel="noreferrer">
                    38 Degrees <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                  </a>
                </h3>
                <p className="inline text-sm pl-4">
                  A UK non-profit, campaigning for social & political change on issues such as climate change & human rights
                </p>
              </div>

              <div className="mb-1">
                <h4 className="inline font-medium title-font text-sm md:text-base text-gray-700">Head of Technology</h4>
                <p className="inline text-sm pl-4">December 2019 - August 2021</p>
              </div>

              <p className="leading-relaxed pl-4 mb-6">
                I was responsible for managing the overall work & direction of the technology team, line managing &
                task managing multiple software engineers, and working in close collaboration with the Director of
                Technology. I was a member of the organisation's Senior Management Team, and was involved in non-technical
                projects such as developing the new organisational strategy.
              </p>

              <div className="mb-1">
                <h4 className="inline font-medium title-font text-sm md:text-base text-gray-700">Senior Software Engineer</h4>
                <p className="inline text-sm pl-4">June 2017 - December 2019</p>
              </div>

              <p className="leading-relaxed pl-4">
                I was responsible for various projects on a tech stack that handles millions of emails and hundreds of
                thousands of visitors per day. This included taking the lead on complex compliance projects, such as
                GDPR. I provided line management and coaching to both technical & non-technical staff.
              </p>
            </TimelineSection>

            <TimelineSection
              lineColorClass="from-sky-100"
              iconBorderClass="border-4 border-sky-100"
              imageSrc={ocadoLogo}
              imageAlt="Ocado Technology logo"
              className="pb-4"
            >
              <div className="mb-6">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  <a href="https://www.ocadogroup.com/about-us/ocado-technology/" target="_blank" rel="noreferrer">
                    Ocado Technology <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                  </a>
                </h3>
                <p className="inline text-sm pl-4">
                  End-to-end grocery retail platform, providing tech that powers grocery businesses around the world
                </p>
              </div>

              <div className="mb-1">
                <h4 className="inline font-medium title-font text-sm md:text-base text-gray-700">Development Team Leader</h4>
                <p className="inline text-sm pl-4">July 2012 - May 2017</p>
              </div>

              <p className="leading-relaxed pl-4 mb-6">
                I built-up and led multiple software development teams. This ranged from single-person project teams,
                up to teams of 9 developers. I was responsible for recruitment, onboarding, task management, line
                management, coaching, appraisals, and project management. I provided expert backup during complex
                out-of-hours issues.
              </p>

              <div className="mb-1">
                <h4 className="inline font-medium title-font text-sm md:text-base text-gray-700">Software Engineer</h4>
                <p className="inline text-sm pl-4">July 2007 - June 2012</p>
              </div>

              <p className="leading-relaxed pl-4">
                I was responsible for multiple warehouse automation projects - such as re-platforming legacy systems,
                integrating new mechanical & robotic hardware into warehouse control systems, and optimising real-time
                control algorithms to improve warehouse efficiency. I regularly provided out-of-hours support for
                critical systems.
              </p>
            </TimelineSection>
          </Timeline>
        </section>

        {/***** KEY PROJECTS SECTION *****/}
        <section className="text-gray-600">
          <SectionHeader>
            Key Technical Projects
          </SectionHeader>

          <Timeline>
            <TimelineSection
              lineColorClass="from-violet-100"
              iconBorderClass="border-4 border-violet-100"
              icon={<DevicePhoneMobileIcon className="h-6 w-6 text-gray-800" />}
              className="pb-12"
            >
              <div className="mb-1">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  <a href="https://app.organise.network/" target="_blank" rel="noreferrer">
                    The Organise app - empowering workers to organise & campaign for better rights <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                  </a>
                </h3>
              </div>

              <div className="mb-2">
                <SkillBadge className="bg-sky-100 text-gray-700">Ruby on Rails</SkillBadge>
                <SkillBadge className="bg-sky-100 text-gray-700">React</SkillBadge>
                <SkillBadge className="bg-sky-100 text-gray-700">NextJS</SkillBadge>
                <SkillBadge className="bg-violet-100 text-gray-700">Amazon Aurora</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">AWS</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Agile</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Test Driven Development</SkillBadge>
              </div>

              <p className="leading-relaxed pl-2">
                I led the build of the MVP in a short timespan; Integrated the new app with legacy systems
                to provide backwards compatibility; Integrated with payment processors to generate income,
                and with an analytics suite to monitor revenue; Created KPI dashboards for revenue & engagement
                targets, and designed A/B tests to iteratively improve these metrics; Optimised the software &
                infrastructure of the app to improve performance and scalability.
              </p>
            </TimelineSection>

            <TimelineSection
              lineColorClass="from-orange-100"
              iconBorderClass="border-4 border-orange-100"
              icon={<ArchiveBoxIcon className="h-6 w-6 text-gray-800" />}
              className="pb-12"
            >
              <div className="mb-1">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  WeVote - Voter turnout app for 2019 UK Election
                </h3>
              </div>

              <div className="mb-2">
                <SkillBadge className="bg-sky-100 text-gray-700">Ruby on Rails</SkillBadge>
                <SkillBadge className="bg-sky-100 text-gray-700">Bootstrap</SkillBadge>
                <SkillBadge className="bg-sky-100 text-gray-700">Progressive Web App</SkillBadge>
                <SkillBadge className="bg-violet-100 text-gray-700">PostgreSQL</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">Heroku</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Kanban</SkillBadge>
              </div>

              <p className="leading-relaxed pl-2 mb-2">
                I developed & launched an MVP within ~2 weeks of the election being announced, and then
                went through multiple rapid iterations to improve the app. I led a cross-functional team of
                developers, designers & campaigners (both in-house & external contractors).
              </p>
              <p className="leading-relaxed pl-2">
                The app exceeded organisational targets - it was used by over 100,000 users; over 3,000
                people shared it with friends & family; and it automatically sent thousands of emails & text
                messages reminding people to vote on election day.
              </p>
            </TimelineSection>

            <TimelineSection
              lineColorClass="from-orange-100"
              iconBorderClass="border-4 border-orange-100"
              icon={<CircleStackIcon className="h-6 w-6 text-gray-800" />}
              className="pb-12"
            >
              <div className="mb-1">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  Political Intelligence Database - Sophisticated targeting of politicians & voters
                </h3>
              </div>

              <div className="mb-2">
                <SkillBadge className="bg-sky-100 text-gray-700">Ruby on Rails</SkillBadge>
                <SkillBadge className="bg-sky-100 text-gray-700">React</SkillBadge>
                <SkillBadge className="bg-sky-100 text-gray-700">GraphQL</SkillBadge>
                <SkillBadge className="bg-violet-100 text-gray-700">PostGIS</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">AWS</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">Docker</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Test Driven Development</SkillBadge>
              </div>

              <p className="leading-relaxed pl-2 mb-2">
                This project means campaigns can be targeted at elected officials & the voters in their local area
                in a sophisticated manner - using a range of political data & local demographic information. It also
                prevents mistakes by automatically updating key political data such as elected officials' names,
                contact details, and the positions they hold in office.
              </p>
              <p className="leading-relaxed pl-2">
                I drove the business case for the project and championed it to senior management. I collaborated
                with non-technical staff to define requirements, and led the design & implementation, including
                management of external contractors. I integrated 3rd party data into the system - automating the
                process of cleaning, transforming & loading the data. During the go-live phase, I trained staff on
                the use of the new system, and how to use it in conjunction with existing systems - ensuring it was
                embedded into working practices within the organisation to realise its full potential.
              </p>
            </TimelineSection>

            <TimelineSection
              lineColorClass="from-sky-100"
              iconBorderClass="border-4 border-sky-100"
              icon={<BugAntIcon className="h-6 w-6 text-gray-800" />}
              className="pb-12"
            >
              <div className="mb-1">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                  <a href="https://www.youtube.com/watch?v=e31UqBT5bKE" target="_blank" rel="noreferrer">
                    The Hive - Real-time control system for robotic pick & pack warehouses <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                  </a>
                </h3>
              </div>

              <div className="mb-2">
                <SkillBadge className="bg-sky-100 text-gray-700">Java</SkillBadge>
                <SkillBadge className="bg-violet-100 text-gray-700">Cassandra</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">Ansible</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">TCP/UDP</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">On-premises data centres</SkillBadge>
                <SkillBadge className="bg-rose-100 text-gray-700">High Availability</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Agile</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Scrum</SkillBadge>
                <SkillBadge className="bg-emerald-100 text-gray-700">Test Driven Development</SkillBadge>
              </div>

              <p className="leading-relaxed pl-2 mb-2">
                My team were key to ensuring this large project meet its primary objectives: Automating the
                storage & retrieval of groceries in a giant 'hive'; Crash safety (preventing robots from
                physically colliding); Low-latency wireless communication between robots & the central 'air
                traffic control' software; High-availability & modularity of the 'air traffic control' software.
              </p>
              <p className="leading-relaxed pl-2 mb-2">
                I performed various roles within my team - team lead, technical lead, product owner, and scrum
                master. I drove the definition, specification & implementation of a new automated process to ensure
                robots were correctly configured & 'road tested' before moving into the hive. I coordinated
                with various teams across software, engineering & hardware to implement this process - which was
                critical to maintain crash safety.
              </p>
              <p className="leading-relaxed pl-2">
                Due to the real-time nature of this project, it required the use of low-level network protocols,
                the design of binary data structures to pass information around the system, advanced
                multi-threading & scheduling, and use of various high-availability techniques to prevent outages.
              </p>
            </TimelineSection>

            <TimelineSection
              lineColorClass="from-green-200"
              iconBorderClass="border-4 border-green-200"
              icon={<OpenSourceIcon className="h-6 w-6 text-gray-800" />}
              className="pb-4"
            >
              <div className="mb-1">
                <h3 className="inline font-medium title-font text-sm md:text-base text-gray-900">
                    Open-source projects
                </h3>
              </div>

              <p className="leading-relaxed pl-2 mb-2">
                Where possible I seek to open-source utilities which are reuseable and are not commercially
                sensitive or business critical. I also enhance existing open-source projects.
              </p>
              <ul className="leading-relaxed space-y-2 pl-2 mb-2">
                <li className="flex flex-row space-x-2">
                  <ArrowSmallRightIcon className="flex-shrink-0 h-6 w-6 text-gray-800" />
                  <div>
                    <div className="text-gray-900">
                      <a href="https://github.com/38degrees/draft_approve" target="_blank" rel="noreferrer">
                        DraftApprove <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                      </a>
                    </div>
                    I built this open-source Ruby library while at 38 Degrees. Allows users to draft updates to
                    one or more database records, and later approve them. Used by staff to review automated
                    updates to political data before approving the changes to make them live.
                  </div>
                </li>
                <li className="flex flex-row space-x-2">
                  <ArrowSmallRightIcon className="flex-shrink-0 h-6 w-6 text-gray-800" />
                  <div>
                    <div className="text-gray-900">
                      <a href="https://github.com/noduslabs/infranodus" target="_blank" rel="noreferrer">
                        Infranodus <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                      </a>
                    </div>
                    I contributed to this open-source Node.js app which can analyse & visualise text as graphs. I added
                    features such as improved importing of recent news articles from RSS feeds for analysis, and making
                    it easier to setup & deploy the application.
                  </div>
                </li>
                <li className="flex flex-row space-x-2">
                  <ArrowSmallRightIcon className="flex-shrink-0 h-6 w-6 text-gray-800" />
                  <div>
                    <div className="text-gray-900">
                      <a href="https://github.com/toothrot/amplitude-api" target="_blank" rel="noreferrer">
                        AmplitudeAPI <ArrowTopRightOnSquareIcon className="h-4 w-4 inline text-blue-600" />
                      </a>
                    </div>
                    Open-source Ruby library for interfacing with the Amplitude Analytics platform. I added support
                    for Amplitude's Cohorts API, enabling analysis of different groups of users (eg. high-value
                    customers).
                  </div>
                </li>
              </ul>
            </TimelineSection>
          </Timeline>
        </section>

        {/***** FOOTER *****/}
        <footer className="print:hidden">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row justify-center gap-4">
              <a href="https://github.com/asibs" target="_blank" rel="noreferrer">
                <GitHubIcon className="h-10 w-10 inline" />
              </a>

              <a href="https://www.linkedin.com/in/andrew-sibley-/" target="_blank" rel="noreferrer">
                <LinkedInIcon className="h-10 w-10 inline" />
              </a>
            </div>

            <div>
              <p className="text-xs text-gray-600">
                Built using:&nbsp;
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="text-blue-400 underline">React</a>,&nbsp;
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="text-blue-400 underline">TailwindCSS</a>,&nbsp;
                <a href="https://pages.github.com/" target="_blank" rel="noreferrer" className="text-blue-400 underline">GitHub</a>,&nbsp;
                <a href="https://github.com/tschaub/gh-pages" target="_blank" rel="noreferrer" className="text-blue-400 underline">gh-pages</a>
                <br />
                With icons from:&nbsp;
                <a href="https://heroicons.com/" target="_blank" rel="noreferrer" className="text-blue-400 underline">Heroicons</a>,&nbsp;
                <a href="https://devicon.dev/" target="_blank" rel="noreferrer" className="text-blue-400 underline">Devicon</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
