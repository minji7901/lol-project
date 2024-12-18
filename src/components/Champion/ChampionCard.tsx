import { addImgChampion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

export default function ChampionCard({
  champion,
}: {
  champion: addImgChampion;
}) {
  return (
    <Link
      href={`/champions/${champion.id}`}
      className="bg-darkGray text-white p-4 rounded-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/50 text-center group"
    >
      <Image
        src={champion.imgPath}
        width={100}
        height={100}
        alt={champion.imgPath}
        className="mx-auto rounded-lg"
      />
      <h2 className="my-2 font-bold group-hover:text-main-color duration-300">{champion.name}</h2>
      <p className="text-gray-400 group-hover:text-white duration-300 break-keep">{champion.title}</p>
    </Link>
  );
}
