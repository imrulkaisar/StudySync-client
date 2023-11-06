import { Link } from "react-router-dom";

const PageHeader = ({ title, description, steps = [] }) => {
  return (
    <section className="bg-gray-100 py-0">
      <div className="container-area py-10 border-b flex flex-col lg:flex-row justify-between gap-3 lg:gap-10 items-center">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-center lg:text-left capitalize">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-center lg:text-left max-w-xl">
              {description}
            </p>
          )}
        </div>
        <div className="">
          <nav className="flex text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium hover:text-black"
                >
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              {/* steps */}
              {steps.length > 0 &&
                steps.map((step, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <svg
                        className="w-3 h-3 text-gray-400 mx-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <Link to={step.link} className="ml-1 text-sm font-medium">
                        {step.title}
                      </Link>
                    </div>
                  </li>
                ))}
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium md:ml-2">
                    {title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
