const SubmittedAssignment = () => {
  return (
    <>
      <tr className="border-b">
        <th
          scope="row"
          className="px-6 py-7 font-medium text-gray-900 whitespace-nowrap"
        >
          Basic HTML Page
        </th>
        <td className="px-6 py-7">60</td>
        <td className="px-6 py-7">Imrul Kaisar</td>
        <td className="px-6 py-7">Pending</td>
        <td className="px-6 py-7">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Give mark
          </a>
        </td>
      </tr>
    </>
  );
};

export default SubmittedAssignment;
