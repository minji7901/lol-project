"use client";
import ChampionCard from "@/components/Champion/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import Title from "@/components/Title";

export default function RotationPage() {
  const fetchRotationChampions = async () => {
    const res = await fetch("/api/rotation");
    if (!res.ok) {
      throw new Error("로테이션 챔피언 데이터를 가져오는 데 실패");
    }
    const data = await res.json();
    return data.rotationChampions;
  };

  // useQuery 사용
  const { data: champions, isPending } = useQuery<addImgChampion[], Error>({
    queryKey: ["rotationChampions"],
    queryFn: fetchRotationChampions,
  });
  if (isPending) {
    return <Loading />;
  }
  return (
    <div className="h-full">
      <Title>Champion Rotation</Title>
      <div className="grid grid-cols-2 gap-3 overflow-scroll h-[calc(100%-56px)] pr-3 md:grid-cols-6 md:gap-5">
        {champions?.map((champion: addImgChampion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </div>
  );
}
