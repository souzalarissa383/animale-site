import React, { useState } from "react";
import {
  FaUndo,
  FaBox,
  FaQuestion,
  FaComments,
  FaWhatsapp,
  FaUser,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button className="sidebar-toggle" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <IoClose size={24} />
        </button>

        <ul>
          <li>
            <FaUndo className="icon" /> DEVOLUÇÃO
          </li>
          <li>
            <FaBox className="icon" /> STATUS DO PEDIDO
          </li>
          <li>
            <FaQuestion className="icon" /> PERGUNTAS FREQUENTES
          </li>
          <li>
            <FaComments className="icon" /> CHAT
          </li>
          <li>
            <FaWhatsapp className="icon" /> WHATSAPP
          </li>
          <li>
            <FaUser className="icon" /> VENDEDOR ONLINE
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
