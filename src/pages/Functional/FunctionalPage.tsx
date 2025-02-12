import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import CreateCalendar from "./CreateCalendar/_components/CreateCalendar";
import SearchPage from "../SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import CommonContainer from "../../components/Layout/CommonContainer";
import { useOutletContext } from "react-router-dom";
import { VoteFormProvider } from "./context/VoteFormContext";
import Modal from "../../components/Modal/core";
import { SearchProvider } from "../SearchPage/context/SearchContext";

export default function FunctionalFunnel() {
    const funnelOptions = {
        steps: ["생성", "캘린더", "주소검색"] as const,
        init: { step: "생성", context: {} },
        stepQueryKey: "step",
    };

    const [FunnelComponent, setStep, contextMap] = useFunnel(funnelOptions);

    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();
    const handleStepChange = (step: "생성" | "캘린더" | "주소검색", context = {}) => {
        let newTitle = "생성하기";
        if (step === "주소검색") newTitle = "장소 찾기";
        if (step === "캘린더") newTitle = "기간 정하기";

        setHeaderConfig({ title: newTitle });
        setStep(step, context);
    };

    return (
        <VoteFormProvider>
            <SearchProvider>
            <CommonContainer>
                <Modal />

                <FunnelComponent>
                    <FunnelComponent.Step name="생성">
                        <CreateVote onCalendar={() => handleStepChange("캘린더", contextMap["생성"])} onSearch={() => handleStepChange("주소검색", contextMap["생성"])} />
                    </FunnelComponent.Step>

                    <FunnelComponent.Step name="캘린더">
                        <CreateCalendar onNext={() => handleStepChange("생성", contextMap["캘린더"])} />
                    </FunnelComponent.Step>

                    <FunnelComponent.Step name="주소검색">
                        <SearchPage />
                    </FunnelComponent.Step>
                </FunnelComponent>
            </CommonContainer>
            </SearchProvider>
        </VoteFormProvider>
    );
}
