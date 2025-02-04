import * as S from "./Styles";
import { useEffect, useState } from "react";
import { useVoteFormContext } from "../../context/VoteFormContext/VoteFormProvider";
import { Controller } from "react-hook-form";

export default function SlideContainer() {
  const { form, resetForm } = useVoteFormContext();
  const { control, watch, setValue, getValues } = form;
  
  // 현재 탭("VOTE" | "COURSE") 가져오기 (기본값 "VOTE")
  const tripPlanType = (watch("tripPlanType") || "VOTE") as "VOTE" | "COURSE";
  
  // 로컬 상태: 그룹 목록을 배열로 관리 (서버에서 받아오지 않고 클라이언트에서 임의로 생성)
  const [groupList, setGroupList] = useState<string[]>([]);
  
  // 초기 로딩 시, 만약 form의 groupName 값이 있으면 배열로 변환해서 groupList에 설정 (없으면 빈 배열)
  useEffect(() => {
    const currentGroupName = getValues("groupName");
    if (currentGroupName && typeof currentGroupName === "string" && currentGroupName.trim() !== "") {
      setGroupList(currentGroupName.split(","));
    } else {
      setGroupList([]);
      setValue("groupName", "");
    }
  }, [getValues, setValue]);
  
  // "생성하기" 버튼 클릭 시 처리 함수
  const handleCreate = () => {
    // 1. 새 그룹 이름 생성: "제목" + (현재 그룹 개수 + 1)
    const newGroup = `제목${groupList.length + 1}`;
    // 2. 기존 그룹 목록에 새 그룹 추가
    const updatedGroupList = [...groupList, newGroup];
    setGroupList(updatedGroupList);
    // 3. form의 groupName 필드에 업데이트 (콤마로 구분된 문자열)
    setValue("groupName", updatedGroupList.join(","));
    // 4. activeButton도 새 그룹으로 설정
    setValue("activeButton", newGroup);
    // 5. 폼 리셋: 필요한 필드들은 초기값으로 설정 (여기서는 tripPlanType은 그대로 유지)
    resetForm({
      tripPlanType,
      groupName: updatedGroupList.join(","),
      activeButton: newGroup,
      // 기타 폼 필드들은 resetForm 내부 기본값으로 처리
    });
  };

  return (
    <S.CustomCard>
      {/* Controller를 사용하여 activeButton을 관리 */}
      <Controller
        name="activeButton"
        control={control}
        defaultValue="CREATE"
        render={({ field: activeField }) => (
          <>
            {/* "생성하기" 버튼 */}
            <S.SlideContainer $isFirst={true} $isLast={groupList.length === 0}>
              <S.Slide
                $active={activeField.value === "CREATE"}
                $isCreateButton={true}
                onClick={() => {
                  // 클릭 시 "생성하기" 처리: 새 그룹 추가
                  handleCreate();
                }}
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14m7-7H5"
                    stroke="#3b46f1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </S.Slide>
              <S.Label $active={activeField.value === "CREATE"} $isCreateButton={true}>
                생성하기
              </S.Label>
            </S.SlideContainer>
            {/* 기존 그룹 버튼들 렌더링 */}
            {groupList.map((group, index) => (
              <S.SlideContainer key={group} $isFirst={false} $isLast={index === groupList.length - 1}>
                <S.Slide
                  $active={activeField.value === group}
                  onClick={() => activeField.onChange(group)}
                >
                  {group}
                </S.Slide>
                <S.Label $active={activeField.value === group}>{group}</S.Label>
              </S.SlideContainer>
            ))}
          </>
        )}
      />
    </S.CustomCard>
  );
}
