"use client";

import Image from "@/components/image/";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";
import Logo from "@/public/logo.png";
import _ from "lodash";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LangText from "@/components/langText";
import { getIndexNav } from "@/apis/nav";
import NavLang from "./lang";

function handleActive(key: string, activeKey: string): boolean {
  if (_.isArray(key)) {
    return key.includes(activeKey);
  } else {
    return activeKey === key;
  }
}

const MenuOpenIcon = () => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5073"
      width="24"
      height="24"
    >
      <path
        d="M133.31 296.552h757.207c19.782 0 35.951-16.169 35.951-35.95 0-19.782-15.997-35.952-35.95-35.952H133.31c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951zM890.517 476.135H133.311c-19.782 0-35.951 16.17-35.951 35.951 0 19.782 16.17 35.951 35.95 35.951h757.207c19.782 0 35.951-16.17 35.951-35.951 0-19.782-16.17-35.95-35.95-35.95zM890.517 727.448H133.311c-19.782 0-35.951 15.997-35.951 35.95s16.17 35.952 35.95 35.952h757.207c19.782 0 35.951-15.998 35.951-35.951s-16.17-35.951-35.95-35.951z"
        p-id="5074"
        fill="#111111"
      ></path>
    </svg>
  );
};
const MenuCloseIcon = () => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6270"
      width="24"
      height="24"
    >
      <path
        d="M476.929 510.717c-2.435-1.893-4.08-2.914-5.414-4.245-91.703-91.656-183.367-183.36-275.107-274.981-6.473-6.467-10.456-13.628-9.221-22.992 1.255-9.521 6.404-16.263 15.211-19.933 9.068-3.779 17.568-2.194 25.24 3.79 1.893 1.477 3.541 3.276 5.245 4.98 91.2 91.186 182.394 182.376 273.56 273.601 1.444 1.444 2.49 3.286 3.721 4.944 0.758 0.168 1.517 0.338 2.276 0.506 1.096-1.763 1.899-3.82 3.328-5.249 91.635-91.728 183.338-183.387 274.971-275.116 7.045-7.055 14.912-11.015 25.05-8.739 18.853 4.232 26.04 26.656 13.163 41.048-1.376 1.541-2.893 2.96-4.356 4.421-91.193 91.193-182.384 182.391-273.606 273.556-1.444 1.444-3.242 2.539-5.952 4.628 2.794 2.152 4.752 3.344 6.328 4.921 91.466 91.406 182.888 182.862 274.367 274.256 5.576 5.572 9.668 11.638 9.619 19.835-0.063 10.511-4.832 18.33-14.201 22.767-9.584 4.537-18.802 3.111-27.006-3.743-1.714-1.431-3.252-3.083-4.835-4.67-91.073-91.069-182.145-182.138-273.208-273.221-1.459-1.459-2.774-3.066-4.553-5.052-1.81 1.721-3.28 3.052-4.676 4.452-91.808 91.797-183.633 183.58-275.38 275.436-7.393 7.403-15.695 11.116-26.107 8.332-17.952-4.796-24.464-26.482-12.216-40.486 1.359-1.555 2.866-2.984 4.328-4.446 91.321-91.329 182.643-182.653 273.981-273.963 1.335-1.328 2.869-2.455 5.445-4.645v0z"
        fill="#111111"
        p-id="6271"
      ></path>
    </svg>
  );
};

const DropDown = ({ item, activeUrl }: { item: Nav; activeUrl: string }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <span
        id={"basic-button" + item.url}
        aria-controls={open ? "basic-menu" + item.url : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="cursor-pointer hover:text-primary"
      >
        <LangText name={item.name}></LangText>
        <i
          className={`iconfont icon-down inline-block transition-all ml-2 ${
            open && "rotate-180"
          }`}
        ></i>
      </span>
      <Menu
        id={"basic-menu" + item.url}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button" + item.url,
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 30,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
      >
        {item.children?.map((link) => (
          <MenuItem key={link.id}>
            <Link
              className={
                handleActive(link.url, activeUrl)
                  ? "text-primary"
                  : "text-gray-900"
              }
              href={link.url}
              target={link.url.indexOf("http") != -1 ? "_black" : ""}
            >
              <LangText name={link.name}></LangText>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { scrollY, windowWidth } = useSelector(
    (state: StoreStateType) => state.app
  );
  const [activeUrl, setActiveUrl] = useState("/home");
  const [navBg, setNavBg] = useState("");
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState<Nav[]>([]);
  const { data } = getIndexNav(0);

  useEffect(() => {
    setNavBg(
      scrollY >= 100
        ? "md:bg-primary md:bg-opacity-60 md:text-white bg-white text-gray-900"
        : "bg-white text-gray-900"
    );
  }, [scrollY]);

  // 宽度改变关闭弹窗
  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    setOpen(false);
    setActiveUrl(pathname as string);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  useEffect(() => {
    setLinks(data?.data.navs || []);
  }, [data]);

  return (
    <>
      <header
        className={`transition-all duration-500 backdrop-blur-[10px] w-full flex left-0 right-0 top-0 z-[12] 
          ${"justify-between md:justify-normal sticky py-[10px] md:py-5 gap-x-[20px] xl:gap-x-[50px] xxl:gap-x-[80px] px-global"} 
          ${navBg}`}
      >
        {/* logo */}
        <Link href="/">
          <div className="relative w-[60px] h-[60px]">
            <Image src={Logo} layout="fill" alt="logo" priority />
          </div>
        </Link>

        {/* pd:links */}
        <nav className="flex-1 hidden md:flex items-center">
          <ul className="items-center flex md:gap-x-5 xxl:gap-x-10 ">
            {links.map((link) => (
              <li
                key={link.id}
                className={`relative hover:text-primary ${
                  handleActive(link.url, activeUrl) ? "text-primary" : ""
                }`}
              >
                {link.children ? (
                  <DropDown item={link} activeUrl={activeUrl}></DropDown>
                ) : (
                  <Link
                    href={link.url!}
                    target={link.url.indexOf("http") != -1 ? "_black" : ""}
                  >
                    <LangText name={link.name}></LangText>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-x-2">
          <div className="flex items-center">
            <NavLang></NavLang>
          </div>
          {/* mobile:links */}
          <button className="block md:hidden" onClick={() => setOpen(!open)}>
            <MenuOpenIcon></MenuOpenIcon>
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(!open)}
        className={`block md:hidden fixed top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full bg-[hsla(0,0%,7%,.36)]  backdrop-blur-[4px] duration-[800ms]  transition-opacity opacity-0 ${
          open && "opacity-100 !z-[11]"
        }`}
      ></div>
      {/* 移动端菜单层级 */}
      <nav
        className={`block md:hidden z-[12] bg-white duration-500 transition-all fixed  top-0 bottom-0 h-full w-[230px] py-[10px] px-5 ${
          open ? "right-0" : "-right-[230px]"
        }`}
      >
        <div className="h-[40px] flex justify-end items-center">
          <button onClick={() => setOpen(!open)}>
            <MenuCloseIcon></MenuCloseIcon>
          </button>
        </div>
        <ul className="grid gap-y-5 mt-[10px]">
          {links.map((link) => (
            <li
              key={link.id}
              className={`text-xl text-gray-900 ${
                handleActive(link.url, activeUrl) && "text-primary"
              }`}
            >
              <LangText
                name={link.name}
                onClick={() => {
                  if (!link.children) {
                    router.push(link.url);
                  }
                }}
              ></LangText>
              {link.children && (
                <ul className="ml-4">
                  {link.children.map((item) => (
                    <li
                      key={item.id}
                      className={`text-lg text-gray-900 ${
                        handleActive(item.url, activeUrl) && "text-primary"
                      }`}
                    >
                      <LangText
                        name={item.name}
                        onClick={() => {
                          router.push(item.url);
                        }}
                      ></LangText>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
