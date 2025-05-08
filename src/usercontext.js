import React, { createContext, useContext, useState } from "react";
import drink from "./images/drink.jpeg";
import عروسة from "./images/عروسة.png";
import chips from "./images/chips.png";

// إنشاء سياق المستخدم
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [categories] = useState([
    { id: "meals", name: "عرايسنا", image: عروسة },
    { id: "beside", name: "مقبلات", image: chips },
    // { id: "salads", name: "سلطات", image: pizza },
    { id: "drinks", name: "مشروبات", image: drink },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("meals");

  // إدارة العنصر المحدد لعرضه في النافذة المنبثقة
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <UserContext.Provider
      value={{
        categories,
        selectedCategory,
        setSelectedCategory,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook لاستخدام السياق بسهولة
export const useUser = () => useContext(UserContext);
