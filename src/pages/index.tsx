import Head from "next/head";
import React, { ChangeEvent } from "react";
import type { NextPage } from "next";
import { useCart } from "../contexts/CartContext";
import { ItemRecipe } from "../components/custom/ItemRecipe";
import { useItemRecipe } from "../contexts/ItemContext";
import { Button } from "../components/core/Button";
import { CenterLayout } from "../layouts/CenterLayout";
import { Title } from "../components/core/Title";

const Home: NextPage = () => {
  const { items, selectedItem, selectItem } = useItemRecipe();
  const { totalPrice, addToCart } = useCart();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    selectItem(event.target.value || "1");
  }

  return (
    <div>
      <Head>
        <title>New World | Calculadora de Craft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenterLayout>
        <Title>Calculadora de Craft</Title>

        <select onChange={handleChange} placeholder="Selecione o item">
          <option>Todas</option>
          {items.map((item, index) => (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <ItemRecipe item={selectedItem} />

        <Button onClick={() => addToCart(selectedItem)}>
          Adicionar ao carrinho
        </Button>
        <p>Preço total do craft: {totalPrice}</p>
      </CenterLayout>
    </div>
  );
};

export default Home;
