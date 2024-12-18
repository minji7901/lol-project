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
    <div className="bg-darkGray text-white p-3 rounded-lg  text-center group">
      <Image
        src={`${BASE_URL}/${version}/img/item/${item.image.full}`}
        alt={item.image.full}
        width={100}
        height={100}
        className="mx-auto mt-5 w-[100px] rounded-lg"
      />
      <p className="mt-2">{item.name}</p>
      <div className="flex justify-center gap-1 my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <strong className="text-main-color">{item.gold.base}</strong>
      </div>
      <ul className="">
        <li className="font-bold">태그</li>
        {item.tags.map((tag, i) => (
          <li key={i} className="text-gray-500 text-sm border border-gray-500 rounded-md break-keep my-3">{tag}</li>
        ))}
      </ul>
      {/* {item.stats?.FlatHPPoolMod} */}
      {/* <ul>
        {item.stats.map((stat, i) => (
          <li key={i}>{stat === Flat}</li>
        ))}
      </ul> */}
      {/* FlatHPPoolMod?: number; // 마나 증가 
      // FlatMPPoolMod?: number; // 방어력
      증가 FlatArmorMod?: number; // 공격력 증가 FlatPhysicalDamageMod? */}
    </div>
  );
}
