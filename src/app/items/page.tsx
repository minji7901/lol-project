import ItemCard from "@/components/item/ItemCard";
import Title from "@/components/Title";
import { Item } from "@/types/Item";
import { fetchItemList, getVersion } from "@/utils/serverApi";

export default async function ItemPage() {
  const version = await getVersion();
  console.log(version)
  const data: Item[] = await fetchItemList();
  return (
    <div className="h-full">
      <Title>Item list</Title>
      <div className="grid grid-cols-2 gap-3 overflow-scroll h-[calc(100%-56px)] pr-3 md:grid-cols-6 md:gap-5">
        {data.map((item: Item) => {
          return <ItemCard key={item.name} item={item} version={version} />;
        })}
      </div>
    </div>
  );
}
