import { useState } from "react";
import * as S from "./Styles";
import Card from "../../../components/Card";
import { sampleBudgetData } from "../test";
import closeBtn from "../../../assets/icons/closeBtn.svg";
import openBtn from "../../../assets/icons/openBtn.svg";
import { getBudgetType } from "./getBudgetType";

export default function BudgetInfoCard() {
    const [openDays, setOpenDays] = useState<{ [key: string]: boolean }>({});

    const toggleDay = (day: string) => {
        setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    return (
        <S.BudgetInfoCard>
            <Card.Title>
                아래 정보를 통해
                <br />
                예산을 만들었어요!
            </Card.Title>

            <div></div>

            {sampleBudgetData.map((dayData) => (
                <Card.Item key={dayData.day}>
                    <S.DayHeader onClick={() => toggleDay(dayData.day)}>
                        <S.Day>{dayData.day}</S.Day>
                        <S.Toggle>{openDays[dayData.day] ? <S.icon src={closeBtn} alt={closeBtn} /> : <S.icon src={openBtn} alt={openBtn} />}</S.Toggle>
                    </S.DayHeader>

                    <Card.Divider />

                    {openDays[dayData.day] && (
                        <S.DayContent>
                            {dayData.items.map((item) => {
                                const { icon, text } = getBudgetType(item.category);

                                return (
                                    <S.BudgetItem key={item.id}>
                                        <S.BudgetIcon>
                                            <img src={icon} alt={text} />
                                        </S.BudgetIcon>
                                        <S.BudgetDetails>
                                            <S.BudgetName>{item.name}</S.BudgetName>
                                            <S.BudgetCategory>{text}</S.BudgetCategory>
                                        </S.BudgetDetails>
                                        <S.BudgetCost>{item.cost}</S.BudgetCost>
                                    </S.BudgetItem>
                                );
                            })}
                        </S.DayContent>
                    )}
                </Card.Item>
            ))}
        </S.BudgetInfoCard>
    );
}
