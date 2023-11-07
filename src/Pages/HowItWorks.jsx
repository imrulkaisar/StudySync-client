import PageHeader from "../Layouts/PageHeader";

const HowItWorks = () => {
  return (
    <div>
      <PageHeader title="How it works" />
      <section className="py-20">
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
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
