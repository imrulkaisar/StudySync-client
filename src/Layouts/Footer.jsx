import Logo from "../Components/Logo";
import NavItems from "../Components/NavItems";
import SocialIcons from "../Components/SocialIcons";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="flex flex-col items-center justify-center py-16 bg-slate-900">
        <div className="container-area space-y-8">
          <Logo className="justify-center" />
          <nav className="flex gap-5 uppercase text-sm tracking-widest flex-wrap justify-center leading-none">
            <NavItems />
          </nav>
          <SocialIcons className="justify-center text-2xl gap-5" />
        </div>
      </div>
      <div className="bg-slate-800 py-5">
        <div className="container-area text-gray-300 text-sm flex flex-col lg:flex-row justify-center gap-3 leading-none lg:justify-between items-center">
          <p className="text-gray-300 text-sm">
            Copyright &copy;2023 StudySync | All Right Reserved.{" "}
          </p>
          <div>Terms and Conditions | Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
