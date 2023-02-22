import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { RiMessengerFill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function SideBar() {
  const [state, setState] = useState({
    isPaneOpenLeft: false,
  });

  return (
    <>
      <Sidebar
        style={{
          height: window.innerHeight,
          backgroundColor: "white",
          position: "fixed",
          justifyContent: "space-between",
        }}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "white",
          },
        }}
      >
        <div className="  d-flex justify-content-start mt-4">
          <img
            src="./Instagram.png"
            alt="logo"
            style={{
              height: 35,
              margin: 20,
            }}
          />
        </div>
        <div className=" ">
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: disabled ? "#f5d9ff" : "#d359ff",
                    backgroundColor: active ? "#eecef9" : undefined,
                  };
              },
            }}
            style={{ margin: 0 }}
          >
            <MenuItem id="menu">
              <h6>
                {" "}
                <MdHomeFilled
                  style={{
                    fontSize: 24,
                    marginRight: 10,
                  }}
                />{" "}
                Home
              </h6>
            </MenuItem>
            <MenuItem
              id="menu"
              onClick={() => setState({ isPaneOpenLeft: true })}
            >
              <h6>
                {" "}
                <FiSearch
                  style={{ fontSize: 24, marginRight: 10 }}
                /> Search{" "}
              </h6>
            </MenuItem>
            <MenuItem id="menu">
              {" "}
              <MdOutlineExplore
                style={{ fontSize: 24, marginRight: 10 }}
              />{" "}
              Explore{" "}
            </MenuItem>
            <MenuItem id="menu">
              {" "}
              <BiMoviePlay
                style={{ fontSize: 24, marginRight: 10 }}
              /> Reels{" "}
            </MenuItem>
            <MenuItem id="menu">
              {" "}
              <RiMessengerFill style={{ fontSize: 24, marginRight: 10 }} />{" "}
              Messages{" "}
            </MenuItem>
            <MenuItem id="menu">
              {" "}
              <FaHeart style={{ fontSize: 24, marginRight: 10 }} />{" "}
              Notifications{" "}
            </MenuItem>
            <MenuItem id="menu">
              {" "}
              <BiMessageSquareAdd
                style={{ fontSize: 24, marginRight: 10 }}
              />{" "}
              Create{" "}
            </MenuItem>
            <MenuItem id="menu">
              {" "}
              <CgProfile
                style={{ fontSize: 24, marginRight: 10 }}
              /> Profile{" "}
            </MenuItem>
          </Menu>
        </div>

        {/* <div className=" border">More</div> */}
      </Sidebar>
      ;
    </>
  );
}
