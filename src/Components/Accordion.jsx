import Collapsible from "react-collapsible";

const Accordion = ({ title, children }) => {
  return (
    <Collapsible
      trigger={title}
      transitionTime={200}
      className="rounded-lg overflow-hidden"
      triggerClassName="bg-white px-6 py-5 block text-lg"
      triggerOpenedClassName="bg-gray-700 text-white px-6 py-5 block text-lg rounded-tl-lg rounded-tr-lg"
    >
      <div className="p-5 bg-gray-200 rounded-bl-lg rounded-br-lg">
        {children}
      </div>
    </Collapsible>
  );
};

export default Accordion;
