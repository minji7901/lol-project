import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampionList } from "@/utils/serverApi";

export async function GET() {
  const riotApiKey: string | undefined = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  // 환경 변수 확인
  if (!riotApiKey) {
    throw new Error("RIOT_API_KEY가 설정되어 있지 않음");
  }

  try {
    // Riot API 호출: 로테이션 데이터 가져오기
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": riotApiKey,
        },
      }
    );

    // 응답 상태 확인
    if (!res.ok) {
      console.error(res.status);
      throw new Error("Riot API 호출에 실패");
    }

    // 로테이션 데이터 파싱
    const rotationData: ChampionRotation = await res.json();
    const freeChampionIds = rotationData.freeChampionIds;

    // 전체 챔피언 데이터 가져오기
    const championList = await fetchChampionList();
    if (!championList || championList.length === 0) {
      throw new Error("전체 챔피언 데이터를 가져오는 데 실패");
    }

    // 로테이션 챔피언 필터링
    const rotationChampions = championList.filter((champion) =>
      freeChampionIds.includes(Number(champion.key))
    );

    return Response.json({ rotationChampions });
  } catch (error) {
    console.error(error);
    throw new Error("데이터 처리 중 문제가 발생");
  }
}
