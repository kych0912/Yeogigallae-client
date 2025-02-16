import { useFunnel } from "../../hooks/useFunnel/useFunnel";
import { useNavigate } from "react-router-dom";
import CreateCalendar from "./CreateCalendar/_components/CreateCalendar";
import SearchPage from "../SearchPage";
import CreateVote from "../Functional/CreateVote/_components/CreateVote";
import CommonContainer from "../../components/Layout/CommonContainer";
import { useOutletContext } from "react-router-dom";
import { VoteFormProvider } from "./context/VoteFormContext";
import Modal from "../../components/Modal/core";
import { SearchProvider, useSearch } from "./context/SearchContext"; 
import { CalendarProvider } from "../../components/Calendar/context/CalendarContext";

export default function FunctionalFunnel() {
    return (
        <SearchProvider> 
            <FunctionalFunnelContent />
        </SearchProvider>
    );
}

function FunctionalFunnelContent() {
    const funnelOptions = {
        steps: ["생성", "캘린더", "주소검색"] as const,
        init: { step: "생성", context: {} },
        stepQueryKey: "step",
    };

    const navigate = useNavigate();
    const [FunnelComponent, setStep, contextMap] = useFunnel(funnelOptions);
    const { setHeaderConfig } = useOutletContext<{ setHeaderConfig: (config: { title: string; number?: number }) => void }>();
    const { setSelectedPlace } = useSearch();  

    const handleStepChange = (step: "생성" | "캘린더" | "주소검색", context = {}) => {
        let newTitle = "생성하기";
        if (step === "주소검색") newTitle = "장소 찾기";
        if (step === "캘린더") newTitle = "기간 정하기";

        setHeaderConfig({ title: newTitle });
        setStep(step, context);
    };

    return (
        <VoteFormProvider>
            <CalendarProvider>
                <CommonContainer>
                    <Modal />
                    <FunnelComponent>
                        <FunnelComponent.Step name="생성">
                            <CreateVote
                                onCalendar={() => handleStepChange("캘린더", contextMap["생성"])}
                                onSearch={() => handleStepChange("주소검색", contextMap["생성"])}
                            />
                        </FunnelComponent.Step>

                        <FunnelComponent.Step name="캘린더">
                            <CreateCalendar onNext={() => handleStepChange("생성", contextMap["캘린더"])} />
                        </FunnelComponent.Step>

                        <FunnelComponent.Step name="주소검색">
                            <SearchPage handleSelectItem={(item) => {
                                setSelectedPlace({
                                    place_name: item.place_name,
                                    x: item.x.toString(),
                                    y: item.y.toString(),
                                });
                                navigate(-1);
                            }} />
                        </FunnelComponent.Step>
                    </FunnelComponent>
                </CommonContainer>
            </CalendarProvider>
        </VoteFormProvider>
    );
}
