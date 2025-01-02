import { ButtonProps } from '../../types/button';
import { IconButtonByBaseButton } from './Button.styles';

interface IconButtonProps extends ButtonProps {
    icon?: React.ReactNode;
}

/**
 * 아이콘 버튼입니다. 버튼 컴포넌트를 상속받아 사용합니다.
 * @param children 버튼 내부에 들어갈 컴포넌트
 * @param props 버튼 컴포넌트의 props
 * @returns 
 */

const IconButton = ({children, ...props }: IconButtonProps) => {
    return (
        <IconButtonByBaseButton {...props}>
            {children}
        </IconButtonByBaseButton>
    );
};

export default IconButton;
