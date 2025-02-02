type NonEmptyArray<T> = [T, ...T[]];

//steps type은 비어있지 않은 string 배열
export type StepsType<T extends string> = Readonly<NonEmptyArray<T>>;

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyContext = Record<string,any>;

//step이름이랑 Context 매핑
//전체 context 타입입
//{
// "step1":{"name":"hello"}
//}
export type AnyStepContextMap = Record<string,AnyContext>;


//step 에서의 context 상태
//특정 funnel state 타입
// {
//     step:"step1",
//     context:{
//         message:"hello"
//     }
// }

export interface FunnelState<TName extends string, TContext = never>{
  step:TName;
  context: TContext;
}

export type AnyFunnelState = FunnelState<string,AnyContext>

//AntStepContext의 key로 FunnelState 매핑
//FunnelState 유니온 타입으로 변경
export type FunnelStateByContextMap<TStepContextMap extends AnyStepContextMap> = {
    [key in keyof TStepContextMap & string]: FunnelState<key, TStepContextMap[key]>;
  }[keyof TStepContextMap & string];


//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RouteOption = Partial<Record<string,any>>;
