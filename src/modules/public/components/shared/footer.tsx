import { footerList } from "../../constants/footer-list";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-2 pb-4 bg-white">
      <div className="flex justify-center items-center gap-4">
        {footerList.map((list) => (
          <Link
            key={list.to}
            to={list.to}
            className="caption underline text-[#363636]"
          >
            {list.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
