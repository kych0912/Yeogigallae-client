import CommonContainer from "../../../components/Layout/CommonContainer";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../types/header/header";
import { useEffect } from "react";
import Room from "./_components/Room";
import Friend from "./_components/Friend";
import Modal from "../../../components/Modal/core";

export default function MyFriendPage() {
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    useEffect(() => {   
        setHeaderConfig({title:"친구"});
    }, []);

    return (
        <CommonContainer>
            <Modal />
            <Room />
            <Friend />
        </CommonContainer>
    );
}
