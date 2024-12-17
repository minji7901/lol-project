import ItemCard from "@/components/item/ItemCard";
import { Item } from "@/types/Item";
import { fetchItemList, getVersion } from "@/utils/serverApi";

export default async function ItemPage() {
  const version = await getVersion();
  const data: Item[] = await fetchItemList();
  return (
    <div>
      <h1>Item list</h1>
      <div className="grid grid-cols-6">
        {data.map((item: Item) => {
          return <ItemCard key={item.name} item={item} version={version} />;
        })}
      </div>
    </div>
  );
}
