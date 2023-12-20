"use client";
import React, { createContext, useContext, useState } from "react";
import { Animal } from "../interface/interface";

// Define la forma de tu contexto
interface DataContextProps {
  data: Animal | null;
  setData: React.Dispatch<React.SetStateAction<Animal | null>>;
  cards: Animal[];
  addCard: (newCard: Animal) => void;
  alerta: boolean;
  setAlerta: React.Dispatch<React.SetStateAction<boolean>>;

  deleteCard: (id: string) => void;

  editCard: (id: string | void) => void;

  addGasto:any;
  
  setAddgasto:any;

  image:any,
  setImage:any,

}

interface DataProviderProps {
  children: React.ReactNode;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "useDataContext debe ser usado dentro de un DataContext.Provider"
    );
  }
  return context;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {

  const [data, setData] = useState<Animal | null>(null);
  const [cards, setCards] = useState<Animal[]>([]);
  const [alerta, setAlerta] = useState<boolean>(false);
  const [addGasto, setAddgasto] = useState<boolean>(false);

  // imagen

  const [image, setImage] = useState({ preview: '', raw: '' });


  const addCard = (newCard: Animal) => {
    if (!newCard.idUnico) {
      newCard.idUnico = crypto.randomUUID();
    }

    setCards((prevCards) => [...prevCards, { ...newCard }]);
   
  };

  const deleteCard = (id: string) => {
    const cardId = cards.filter((cardFilter) => cardFilter.idUnico !== id);
    setCards(cardId);
  };

  const editCard = (id: string | void) => {
    if (typeof id === "string") {
      const updatedCards = cards.map((card) => {
        if (card.idUnico === id) {
          return { ...card /* Modificaciones */ };
        }
        return card;
      });

      setCards(updatedCards);
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        cards,
        addCard,
        alerta,
        setAlerta,
        deleteCard,
        editCard,
        addGasto,
        setAddgasto,
        image,
        setImage
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
