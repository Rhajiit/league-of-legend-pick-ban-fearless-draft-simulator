import { useState } from "react";
import ChampionSelect from "../components/champion-select/champion-select-main";
import championRawData from "../mocks/champion.json";
import { ChampionDataListType } from "../types/championDataType";

const championData: ChampionDataListType = championRawData.data;

const LocalPB = () => {
  const [blueTeamLocalBanList, setBlueTeamLocalBanList] = useState<string[]>(
    [],
  );
  const [redTeamLocalBanList, setRedTeamLocalBanList] = useState<string[]>([]);
  const [globalBanList, setGlobalBanList] = useState<string[]>([]);
  const [bannedList, setBannedList] = useState<string[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="min-w-96 border">Blue Team</div>
      <ChampionSelect
        selectedChampionList={selectedList}
        bannedChampionList={bannedList}
        championData={championData}
      />

      <div className="min-w-96 border">Red Team</div>
    </div>
  );
};

export default LocalPB;
