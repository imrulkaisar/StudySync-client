/**
 *
 * Requirements:
 * =============================
 * [Done] 1. Home page(public page) - will have a navbar, footer, a banner section, a feature section, and a faq section.
 * [Done] 2. Banner section - Design it based on the project theme
 * [Done] 3. Feature section - will have few cards of feature
 * [Done] 4. Faq - will have some frequently asked questions
 *
 */

import { Link } from "react-router-dom";
import FeatureCard from "../Components/FeatureCard";

import { FcMindMap, FcPositiveDynamic, FcSerialTasks } from "react-icons/fc";
import Accordion from "../Components/Accordion";

const Home = () => {
  return (
    <div>
      <section className="h-[500px] bg-[url('https://tinyurl.com/5bs47dx4')] bg-center bg-cover py-0">
        <div className="bg-gradient-to-r from-darkOverlay to-lightOverlay text-white h-full flex flex-col justify-center">
          <div className="container-area w-full">
            <div className="content max-w-2xl space-y-5">
              <h2 className="text-5xl leading-tight">
                Working towards your dreams is hard. Not reaching them is
                harder.
              </h2>
              <p className="text-white text-xl pb-5">
                Get work done with others from around the World.
              </p>
              <Link to="/assignments" className="btn btn-primary inline-block">
                Take a challenge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section>
        <div className="container-area space-y-10">
          <h2 className="section-title text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 max-w-4xl mx-auto gap-8">
            <FeatureCard
              icon={<FcMindMap />}
              title="Create Engaging Assignments"
            >
              Easily create and share study tasks with friends for collaborative
              learning.
            </FeatureCard>
            <FeatureCard
              icon={<FcPositiveDynamic />}
              title="Track Progress Effortlessly"
            >
              Mark tasks as complete to monitor study progress within the group
              dynamically.
            </FeatureCard>
            <FeatureCard
              icon={<FcSerialTasks />}
              title="Foster Collaborative Learning"
            >
              Provide valuable feedback and grades to friends' assignments for
              an interactive study experience.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* How it works */}

      <section>
        <div className="container-area space-y-10 text-center">
          <h2 className="section-title">How it works</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg">
              Our backend server empowers users to create engaging study
              assignments and share them with their friends seamlessly. Users
              can easily track their study progress by marking completed tasks
              within the online group study platform. Additionally, the system
              fosters collaborative learning by enabling users to provide
              valuable feedback and grades to their peers' assignments, creating
              an interactive and supportive study environment. With efficient
              data management and secure communication, our backend server
              ensures a smooth and enriching study experience for all
              participants.
            </p>
          </div>
          <Link to="/how-it-works" className="btn btn-primary inline-block">
            Learn More
          </Link>
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="container-area flex flex-col lg:flex-row gap-10">
          <div className="space-y-4 flex-1 text-center lg:text-left">
            <h2 className="section-title leading-tight">
              Frequently Asked Questions
            </h2>
            <p>
              Answers to common queries about our online group study platform.
            </p>
            <img
              className="inline"
              src="https://i.ibb.co/C5jyKJh/FAQs.png"
              alt=""
            />
          </div>
          <div className="flex-grow max-w-2xl space-y-5 mx-auto">
            <Accordion title=" How can I create a new study assignment?">
              <p>
                To create a new study assignment, simply navigate to the "Create
                Assignment" section on your dashboard, fill in the required
                details, set the deadline, and share it with your friends within
                the study group.
              </p>
            </Accordion>
            <Accordion title="Can I edit a study assignment after it has been shared?">
              <p>
                Yes, you can edit the study assignment details as long as the
                deadline has not passed. Simply locate the assignment in the "My
                Assignments" section, click on the edit option, and make the
                necessary changes.
              </p>
            </Accordion>
            <Accordion title="How do I provide feedback on my friends' assignments?">
              <p>
                You can provide feedback on your friends' assignments by
                accessing the "Peer Grading" section, selecting the respective
                assignment, and entering your feedback and rating in the
                provided fields.
              </p>
            </Accordion>
            <Accordion title="Is there a limit to the number of assignments I can create or complete?">
              <p>
                There is no limit to the number of assignments you can create or
                complete within the study group. You can actively participate in
                as many assignments as you like to enhance your collaborative
                learning experience.
              </p>
            </Accordion>
            <Accordion title="Can I view my study progress and performance over time?">
              <p>
                Yes, you can track your study progress and performance by
                accessing the "Progress Tracker" section, which provides a
                comprehensive overview of your completed assignments, grades,
                and overall performance within the study group.
              </p>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
