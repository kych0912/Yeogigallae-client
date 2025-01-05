import Header from "../../components/Header"
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../../components/Button";
import styled from 'styled-components'

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Header 
                leftContent={<IconButton><BackIcon/></IconButton>}
                centerContent={<Typography>{"여행 가보자고"}{" 3"}</Typography>}
                rightContent={<IconButton><HomeIcon/></IconButton>}
            />
            <>
                {children}
            </>
        </>
    )
}

const Typography = styled.div`
  font-size:1rem;
  color:#ffffff;
  font-weight:500;
  line-height:1.178rem;
`