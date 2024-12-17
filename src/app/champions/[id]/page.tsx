import { BASE_URL } from "@/public/static";
import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";

export default async function ChampionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data: ChampionDetail = await fetchChampionDetail(params.id);
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.title}</p>
      <p>{data.lore}</p>
      <Image
        src={`${BASE_URL}/img/champion/loading/${data.id}_0.jpg`}
        alt={data.name}
        width={308}
        height={560}
        priority //우선순위 지정
      />
      <p>스탯</p>
      <ul>
        <li>공격력 : {data.info.attack}</li>
        <li>방어력: {data.info.defense}</li>
        <li>마법력 : {data.info.magic}</li>
        <li>난이도 : {data.info.difficulty}</li>
      </ul>
    </div>
  );
}
