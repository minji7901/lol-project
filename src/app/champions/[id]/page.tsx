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
    <div className="flex flex-col gap-5 h-full overflow-auto md:flex-row md:overflow-visible">
      <div className="flex-none">
        <Image
          src={`${BASE_URL}/img/champion/loading/${data.id}_0.jpg`}
          alt={data.name}
          width={308}
          height={560}
          priority // 우선순위 지정
        />
      </div>
      {/* 챔피언의 상세 정보 */}
      <div className="flex-1 md:overflow-auto pb-5 dark:text-gray-300">
        <h2 className="font-bold text-3xl text-main-color">{data.name}</h2>
        <p className="my-3 text-gray-500">{data.title}</p>
        <p className="break-keep">{data.lore}</p>

        {/* 챔피언 스탯 */}
        <div className="mt-5">
          <p className="mb-3 font-semibold text-secondly">스탯</p>
          <ul className="grid gap-2">
            <li>난이도 : {data.info.difficulty}</li>
            <li>공격력 : {data.info.attack}</li>
            <li>방어력 : {data.info.defense}</li>
            <li>마법력 : {data.info.magic}</li>
          </ul>
        </div>
        {/* 챔피언 패시브 */}
        <div className="mt-5">
          <p className="mb-3 font-semibold text-secondly">
            패시브: {data.passive.name}
          </p>
          <p>{data.passive.description}</p>
        </div>
        {/* 챔피언 스킨 */}
        <div className="mt-5">
          <p className="mb-3 font-semibold dark:text-white">스킨</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {data.skins.map((skin) => (
              <li key={skin.id} className="flex items-center gap-2">
                <span>{skin.name}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* 챔피언 팁 */}
        <div className="mt-5">
          <p className="mb-3 font-semibold dark:text-white">동료 팁</p>
          <ul className="list-disc pl-5 space-y-2">
            {data.allytips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
        {/* 적 챔피언에 대한 팁 */}
        <div className="mt-5">
          <p className="mb-3 font-semibold dark:text-white">적 챔피언 팁</p>
          <ul className="list-disc pl-5 space-y-2">
            {data.enemytips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
