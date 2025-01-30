import { useState } from "react";
import * as S from "./Styles";
import Card from "../../../components/Card";
import { sampleBudgetData } from "../test";

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
                        <S.Toggle>{openDays[dayData.day] ? "–" : "+"}</S.Toggle>
                    </S.DayHeader>

                    <Card.Divider />
                    {openDays[dayData.day] && (
                        <S.DayContent>
                            {dayData.items.map((item) => (
                                <S.BudgetItem key={item.id}>
                                    <S.BudgetIcon>{item.icon}</S.BudgetIcon>
                                    <S.BudgetDetails>
                                        <S.BudgetName>{item.name}</S.BudgetName>
                                        <S.BudgetCategory>{item.category}</S.BudgetCategory>
                                    </S.BudgetDetails>
                                    <S.BudgetCost>{item.cost}</S.BudgetCost>
                                </S.BudgetItem>
                            ))}
                        </S.DayContent>
                    )}
                </Card.Item>
            ))}
        </S.BudgetInfoCard>
    );
}
