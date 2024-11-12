import LangText from "@/components/langText";
import { MouseEvent, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import { StoreStateType } from "@/store";
import { setLang } from "@/store/app";
import { useDispatch } from "react-redux";

const NavLang = () => {
  let langs = {
    cn: "中文",
    en: "English",
    ja: "日本語",
  };
  const dispatch = useDispatch(); // 定义派发器
  const { lang } = useSelector((state: StoreStateType) => state.app);
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
        id={"basic-button"}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="cursor-pointer hover:text-primary select-none"
      >
        <LangText name={langs}></LangText>
        <i
          className={`iconfont icon-down inline-block transition-all ml-2 ${
            open && "rotate-180"
          }`}
        ></i>
      </span>
      <Menu
        id={"basic-menu"}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
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
        {(Object.keys(langs) as Langs[]).map((key) => (
          <MenuItem
            key={key}
            onClick={() => {
              dispatch(setLang(key));
            }}
          >
            <span className={key == lang ? "text-primary" : "text-gray-900"}>
              {langs[key]}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavLang;
