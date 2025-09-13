import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoginSvg, LogoDarkSvg, WalletSvg } from "@/constants/icons";
import { headerNav } from "../../constants/nav-list";
import { Switch } from "@/components/ui/switch";
import CommonButton from "@/components/common/button/common-button";
import { TextAlignJustify, X } from "lucide-react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isToggle]);

  const handleCloseMenu = () => setIsToggle(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white lg:shadow-none shadow-sm px-4 py-3 lg:px-44 lg:py-4">
        <div className="flex justify-between items-center lg:mx-0 sm:mx-10">
          <img src={LogoDarkSvg} alt="logo" className="lg:w-auto w-[120px]" />
          <div className="lg:hidden" onClick={() => setIsToggle(!isToggle)}>
            {isToggle ? <X size={24} /> : <TextAlignJustify size={24} />}
          </div>

          <nav className="hidden lg:flex w-full">
            <div className="flex items-center gap-6 justify-center w-full">
              {headerNav.map((nav) => (
                <Link
                  key={nav.to}
                  to={nav.to}
                  className="hover:text-primary/80 font-[Satoshi] transition-colors"
                >
                  {nav.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Switch id="dark-mode-switch" />
              <CommonButton
                label="Login"
                leftIcon={LoginSvg}
                className="w-[113px] h-11"
              />
              <CommonButton
                leftIcon={WalletSvg}
                className="bg-secondary hover:bg-secondary/95"
              />
            </div>
          </nav>
        </div>
      </header>

      {isToggle && (
        <div
          onClick={handleCloseMenu}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out ${
          isToggle ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6 h-full">
          <img src={LogoDarkSvg} alt="logo" className="w-[100px]" />

          <div className="flex flex-col gap-4">
            {headerNav.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                onClick={handleCloseMenu}
                className="hover:text-primary/80 font-[Satoshi] text-lg transition-colors"
              >
                {nav.title}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <CommonButton
              label="Login"
              leftIcon={LoginSvg}
              className="w-full h-11"
            />
            <CommonButton
              leftIcon={WalletSvg}
              className="bg-secondary hover:bg-secondary/95 w-full"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
