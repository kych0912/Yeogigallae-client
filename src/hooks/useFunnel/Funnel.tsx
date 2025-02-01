import { Children, isValidElement, ReactElement, ReactNode } from "react";
import { StepsType } from "./types";

export interface StepProps<Steps extends StepsType<string>> {
  name: Steps[number];
  children: ReactNode;
}

export interface FunnelProps<Steps extends StepsType<string>> {
  steps: Steps;
  step: Steps[number];
  children: Array<ReactElement<StepProps<Steps>>>;
}


export const Step = (props:StepProps<StepsType<string>>): ReactElement => {
    return <>{props.children}</>;
};

  //Funnel 컴포넌트는 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링한다.
  //find를 통해 Step 중 현재 Step을 찾아 렌더링
export const Funnel = <Steps extends StepsType<string>>({ steps,step,children }: FunnelProps<Steps>) => {
    //children 중 유효한 children만 추출
    //후 children의 props(StepsProps) 중 name이 steps에 포함되어 있는 경우만 추출
    const validChildren = Children.toArray(children)
    .filter(isValidElement)
    .filter(i => steps.includes((i.props as Partial<StepProps<Steps>>).name ?? '')) as Array<
        ReactElement<StepProps<Steps>>
    >;
    //validChildren 중 step과 일치하는 컴포넌트 찾기
    const targetStep = validChildren.find(child => child.props.name === step);
    console.log(targetStep);

    if(!targetStep) throw new Error(`${step} 스텝이 존재하지 않습니다.`);

    return <>{targetStep}</>;
};