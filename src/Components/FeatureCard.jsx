const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="text-center space-y-5">
      <div className="text-8xl flex justify-center">{icon}</div>
      <div className="space-y-2">
        <h4 className="text-lg font-medium">{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
