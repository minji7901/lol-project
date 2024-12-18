import { addImgChampion } from "@/types/Champion";
import { fetchChampionList } from "../../utils/serverApi";
import ChampionCard from "@/components/Champion/ChampionCard";
import Title from "@/components/Title";

export default async function ChampionListPage() {
  const data: addImgChampion[] = await fetchChampionList();

  return (
    <div className="h-full">
      <Title>Champion List</Title>
      <div className="grid grid-cols-2 gap-3 overflow-scroll h-[calc(100%-56px)] pr-3 md:grid-cols-6 md:gap-5">
        {data.map((champion: addImgChampion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
