import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  StepsType,
  AnyStepContextMap,
  FunnelStateByContextMap
} from './types';
import { Funnel, FunnelProps, StepProps, Step } from './Funnel';


type RouteFunnelProps<Steps extends StepsType<string>> = Omit<FunnelProps<Steps>, 'steps' | 'step'>;

type FunnelComponent<Steps extends StepsType<string>> = ((props: RouteFunnelProps<Steps>) => JSX.Element) & {
  Step: (props: StepProps<Steps>) => JSX.Element;
};

//steps : ["step1","step2"]
//init: {step:"step1",context:{message:"hello"}}
//stepQueryKey : "step"
export interface useFunnelOption<TStepContextMap extends AnyStepContextMap>{
  steps: StepsType<keyof TStepContextMap & string>,
  init:FunnelStateByContextMap<TStepContextMap>,
  stepQueryKey: string;
}


export type setStepFn<TStepContextMap extends AnyStepContextMap> = <TCurrentStep extends keyof TStepContextMap>(
  nextStep: keyof TStepContextMap,
  context: TStepContextMap[TCurrentStep]
) => void;

//useFunnel 훅은 현재 스텝을 관리하고, Funnel 컴포넌트와 setStep 함수를 반환
//{
//  step1:{message:"hello"},
//  step2:{message:"world"}
//}
export const useFunnel = <TStepContextMap extends AnyStepContextMap>(
  options: useFunnelOption<TStepContextMap>
):readonly [
  FunnelComponent<typeof options.steps>,
  setStepFn<TStepContextMap>,
  TStepContextMap
]=>{
  const stepQueryKey = options?.stepQueryKey ?? "step";
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStep = (searchParams.get(stepQueryKey) ?? options?.init.step) as keyof TStepContextMap & string;

  //init 파라미터로 초기 상태를 설정
  const [contextMap, setContextMap] = useState<TStepContextMap>(() => {
    const initialState = {} as TStepContextMap;
    initialState[options.init.step] = options.init.context ?? ({} as TStepContextMap[typeof options.init.step]);
    return initialState;
  });

  //<Funnel> 컴포넌트 반환
  //StepProps를 할당한 Step assign
  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function RouteFunnel(props: RouteFunnelProps<typeof options.steps>) {
          const step = searchParams.get(stepQueryKey) ?? options?.init.step;

          //런타임 에러 방지
          if (step == null) {
            throw new Error(
              `표시할 스텝을 step 쿼리 파라미터에 지정해주세요.`
            );
          }
          return <Funnel<StepsType<keyof TStepContextMap & string>> steps={options.steps} step={step} {...props} />;


        },{
          Step
        }
      ),
    [searchParams]
  );

  //setStep 함수로 url 파라미터를 변경한다.
  const setStep = useCallback(<TCurrentStep extends keyof TStepContextMap>(
    nextStep: keyof TStepContextMap,
    context: TStepContextMap[TCurrentStep]
  ) => {
    setSearchParams((prev) => {
      prev.set(stepQueryKey, nextStep as string);
      return prev;
    });
    setContextMap(prev => ({
      ...prev,
      [currentStep]: context
    }));
  }, [setSearchParams, stepQueryKey, currentStep]) 

  return [FunnelComponent, setStep, contextMap] as const;
};  
