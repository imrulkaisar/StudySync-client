const AssignmentDetailsSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <section>
        <div className="container-area flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="flex-grow space-y-8">
            <div className="flex justify-center items-center bg-gray-200 h-96">
              <svg
                className="w-32 h-auto text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
            </div>
            <div className="bg-gray-200 h-4 rounded-3xl "></div>
            <div className="description text-gray-600">
              <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                <div className="flex items-center w-full space-x-2">
                  <div className="h-2.5 bg-gray-200 rounded-full w-32" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-24" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                  <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-24" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[400px]">
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-200 rounded-full w-80" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                  <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-24" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[440px]">
                  <div className="h-2.5 bg-gray-300 rounded-full w-32" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-24" />
                  <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[360px]">
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                  <div className="h-2.5 bg-gray-200 rounded-full w-80" />
                  <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>

          <div className="max-w-xs w-full space-y-8">
            <div className="w-full h-10 text-center bg-gray-200 rounded-lg"></div>

            <div className="border px-5 py-8 text-center space-y-4 bg-gray-100">
              <h4 className="font-semibold text-lg">Created by</h4>

              <div className="flex flex-col items-center gap-4">
                <svg
                  className="text-gray-200 inline w-16 aspect-square rounded-full p-1 border border-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2 mx-auto"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <b>Due Date:</b>
              <p className="pt-5">
                <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2 mx-auto" />
                <div className="w-48 h-3 bg-gray-200 rounded-full mx-auto" />
              </p>
            </div>

            <div className="w-full h-10 text-center bg-gray-200 rounded-lg"></div>

            <div className="w-full h-10 text-center bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssignmentDetailsSkeleton;
