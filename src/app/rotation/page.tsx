"use client";
import ChampionCard from "@/components/Champion/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "./loading";

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
  const { data: champions } = useQuery<addImgChampion[], Error>({
    queryKey: ["rotationChampions"],
    queryFn: fetchRotationChampions,
  });

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>Champion Rotation</h1>
        <div className="grid grid-cols-6 gap-y-5">
          {champions?.map((champion: addImgChampion) => {
            return <ChampionCard key={champion.id} champion={champion} />;
          })}
        </div>
      </div>
    </Suspense>
  );
}
