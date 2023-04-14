import { For, createResource } from "solid-js";
import Card from "../components/Card";

const fetchData = async () => {
  const res = await fetch("http://localhost:4000/products");

  return res.json();
};

export default function Home() {
  const [data] = createResource(fetchData);

  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      <For each={data()}>
        {(product) => (
          <Card flat={false} rounded={true}>
            <img
              src={product.img}
              alt={product.title}
              height={300}
              width={300}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button class="btn">{product.price}</button>
          </Card>
        )}
      </For>
      <p>{console.log(data(), data.loading)}</p>
    </div>
  );
}
