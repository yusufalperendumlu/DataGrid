import "./Home.css";
import { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import { MdOutlineAdd } from "react-icons/md";

import Datagrid from "./Datagrid/Datagrid";

import { addDataItem } from "../services/DataService";

interface DataItem {
  id: string;
  link: string;
  name: string;
  description: string;
}

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [search, setSearch] = useState<string>("");

  const handleAddData = () => {
    const newData: DataItem = {
      id: "",
      link: link,
      name: name,
      description: description,
    };

    addDataItem(newData);
    setPopupOpen(false);
    setLink("");
    setName("");
    setDescription("");
  };

  return (
    <div className="data">
      <div className="top-sec">
        <div className="find">
          <form className="search-bar">
            <input
              type="text"
              placeholder="Search Objects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search" onClick={() => setSearch("")}>
              <FaSearch />
            </button>
          </form>
          <button className="filter">
            <FaFilter />
          </button>
        </div>
        <button className="add" onClick={() => setPopupOpen(true)}>
          <span>
            <MdOutlineAdd />
          </span>
          <p>Yeni Hesap Ekle</p>
        </button>
        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="times">
                <FaTimes onClick={() => setPopupOpen(false)} />
              </span>
              <form onSubmit={handleAddData}>
                <label htmlFor="">Sosyal Medya Linki</label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />
                <label htmlFor="">Sosyal Medya Adı</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="">Açıklama</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <div className="buttons">
                  <button
                    className="cancel"
                    onClick={() => setPopupOpen(false)}
                  >
                    Vazgeç
                  </button>
                  <button type="submit" className="save">
                    Kaydet
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Datagrid search={search} />
    </div>
  );
};

export default Home;
