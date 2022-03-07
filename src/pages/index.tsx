import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// Cart
interface Cart {
  items: Item[];
}

// Item - Bota Leve
interface Item {
  id: string;
  name: string;
  price?: number;
  components: ItemComponent[];
}

// Componente de Item - Asmódeo, Fio de fênix, Couro Rúnico
interface ItemComponent {
  name: string;
  price?: number;
  quantity: number;
}

const items: Item[] = [
  {
    id: "1",
    name: "Bota Leve",
    components: [
      { name: "Asmódeo", quantity: 5 },
      { name: "Fio de Fênix", quantity: 3 },
    ],
  },
  {
    id: "2",
    name: "Luva Leve",
    components: [
      { name: "Asmódeo", quantity: 5 },
      { name: "Fio de Fênix", quantity: 2 },
    ],
  },
];

const Home: NextPage = () => {
  const [selectedItemId, setSelectedItemId] = useState("");

  function selectItem(event: any) {
    setSelectedItemId(event.target.value);
  }

  function calculateTotal(components: ItemComponents[]) {
    return components.reduce(
      (total, component) => (total = component.price * component.quantity),
      0
    );
  }

  const currentItem = items.filter((item) => item.id === selectedItemId)[0];

  return (
    <div>
      <Head>
        <title>New World | Calculadora de Craft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <select onChange={selectItem} placeholder="Selecione o item">
          {items.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <div>
          <p>Receita do Item</p>

          {currentItem.components.map((component) => (
            <div className="flex p-2">
              <p className="mr-2">{component.quantity}</p>
              <p className="mr-2">{component.name}</p>
              <input
                className="bg-red-50 mr-2 px-2"
                placeholder="Preço"
                onChange={() => console.log(component)}
              >
                {component.price}
              </input>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;