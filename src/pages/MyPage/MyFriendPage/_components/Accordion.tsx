import { createContext,useContext, useState } from "react";
import * as S from "./Friend.style";
import DownIcon from "../../../../assets/icons/Down.svg?react";

const AccordionContext = createContext<{isOpen:boolean, setIsOpen:(isOpen:boolean)=>void}>({isOpen:false, setIsOpen:()=>{}});
const useAccordionContext = () => useContext(AccordionContext);

export function Accordion({children}:{children:React.ReactNode}){
    const [isOpen, setIsOpen] = useState(false);

    return <AccordionContext.Provider value={{isOpen, setIsOpen}}>
        <S.Accordion.Wrapper>
            {children}
        </S.Accordion.Wrapper>
    </AccordionContext.Provider>
}

export function AccordionTitle({children,number}:{children:React.ReactNode,number:number}){
    const {isOpen, setIsOpen} = useAccordionContext();

    return (
        <S.Accordion.Title onClick={()=>setIsOpen(!isOpen)}>
            {children}
            <S.Item.ToggleWrapper>
                {number}
                <S.Item.Toggle isOpen={isOpen}>
                    <DownIcon style={{marginLeft:"0.25rem"}}/>
                </S.Item.Toggle>
            </S.Item.ToggleWrapper>
        </S.Accordion.Title>
    );
}

export function AccordionItemWrapper({children}:{children:React.ReactNode}){
    return <S.Accordion.ItemWrapper>{children}</S.Accordion.ItemWrapper>
}

export function AccordionItem({children, index}: {children: React.ReactNode, index?: number}) {
    const {isOpen} = useAccordionContext();
    
    return (
        <S.Accordion.Item 
            style={{
                display: index === 0 ? 'flex' : (isOpen ? 'flex' : 'none')
            }}
        >
            {children}
        </S.Accordion.Item>
    );
}