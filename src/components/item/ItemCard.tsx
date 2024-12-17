import Image from "next/image";
import { BASE_URL } from "@/public/static";
import { Item } from "@/types/Item";

export default function ItemCard({
  item,
  version,
}: {
  item: Item;
  version: string;
}) {
  return (
    <div className="text-center">
      <Image
        src={`${BASE_URL}/${version}/img/item/${item.image.full}`}
        alt={item.image.full}
        width={100}
        height={100}
        className="mx-auto mt-5 w-[100px]"
      />
      <p className="mt-2">{item.name}</p>
    </div>
  );
}
