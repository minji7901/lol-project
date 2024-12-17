import { addImgChampion } from "@/types/Champion";
import { fetchChampionList } from "../../utils/serverApi";
import ChampionCard from "@/components/Champion/ChampionCard";

export default async function ChampionListPage() {
  const data: addImgChampion[] = await fetchChampionList();

  return (
    <div>
      <h1>Champion List</h1>
      <div className="grid grid-cols-6">
        {data.map((champion: addImgChampion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
