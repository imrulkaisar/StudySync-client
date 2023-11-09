import { useEffect } from "react";
import { useState } from "react";

const TableSkeleton = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${showSkeleton ? "animate-pulse" : ""}`}>
      {showSkeleton ? (
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-sm text-transparent uppercase bg-gray-500 border-gray-700">
                <tr>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[200px] inline-block rounded-full">
                      Assignment Title
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Mark
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[150px] inline-block rounded-full">
                      Examinee name
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Status
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Action
                    </span>
                  </td>
                </tr>
              </thead>
              <tbody className="text-base text-transparent">
                <tr className="border-b">
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[200px] inline-block rounded-full">
                      Assignment Title
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Mark
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[150px] inline-block rounded-full">
                      Examinee name
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Status
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Action
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[200px] inline-block rounded-full">
                      Assignment Title
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Mark
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[150px] inline-block rounded-full">
                      Examinee name
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Status
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Action
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[200px] inline-block rounded-full">
                      Assignment Title
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Mark
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[150px] inline-block rounded-full">
                      Examinee name
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Status
                    </span>
                  </td>
                  <td scope="col" className="px-6 py-7">
                    <span className="bg-gray-200 min-w-[100px] inline-block rounded-full">
                      Action
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="py-24">
          <p className="text-5xl text-gray-300 text-center">
            Sorry! No data found!
          </p>
        </div>
      )}
    </div>
  );
};

export default TableSkeleton;
