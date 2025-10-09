import { toast } from "react-toastify";

// to get
export const loadinstalled = () => {
  try {
    const data = localStorage.getItem("installed");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// for save
export const updateList = (app) => {
  const installed = loadinstalled();

  try {
    const isDuplicate = installed.some((a) => a.id === app.id);
    if (isDuplicate) {
      return toast.error("App already installed 😭");
    }
    const updatedinstalled = [...installed, app];
    localStorage.setItem("installed", JSON.stringify(updatedinstalled));
    toast.success("App Installed Successfully 🥳");
  } catch (err) {
    console.log(err);
  }
};

// for delete
export const removeFrominstalled = (id) => {
  const installed = loadinstalled();
  try {
    const updatedinstalled = installed.filter((p) => p.id !== id);
    localStorage.setItem("installed", JSON.stringify(updatedinstalled));
  } catch (err) {
    console.log(err);
  }
};
