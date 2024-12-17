import { addImgChampion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

export default function ChampionCard({
  champion,
}: {
  champion: addImgChampion;
}) {
  return (
    <Link href={`/champions/${champion.id}`}>
      <Image
        src={champion.imgPath}
        width={100}
        height={100}
        alt={champion.imgPath}
      />
      <h2>{champion.name}</h2>
      <p>{champion.title}</p>
    </Link>
  );
}
