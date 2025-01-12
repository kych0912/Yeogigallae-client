import { ReactElement, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {

  //searchParams를 통해 현재 스텝을 관리한다.
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step") || defaultStep;

  //Step 컴포넌트는 각 스텝의 컨텐츠를 렌더링한다.
  //여기서 name을 이용해서 Funnel 컴포넌트에서 현재 스텝을 찾는다.
  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  //setStep 함수로 url 파라미터를 변경한다.
  const setStep = (step: string) => {
    setSearchParams((prev) => {
      prev.set("step", step);
      return prev;
    });
  };

  //Funnel 컴포넌트는 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링한다.
  //find를 통해 Step 중 현재 Step을 찾아 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};