import styled from 'styled-components';

export const FlexibleSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 16px;
  color: white;
  width: 100%;
  align-items: flex-start;
  margin-left: 10px;
`;

export const SelectPeriodWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  width: 100%; 
`;

export const SelectPeriodText = styled.span`
  display: block;
  margin-bottom: 15px;
  margin-left: 5px;
  font-size: 13px;
  color: #fff;
  text-align: left; 
`;

export const PeriodButton = styled.button<{ $active: boolean }>`
  width: 72px;
  height: 45px;
  border-radius: 16px;
  background-color: #313131; 
  border: 1px solid ${({ $active }) => ($active ? '#3b46f2' : '#CBCFCF')}; 
  color: ${({ $active }) => ($active ? '#3b46f2' : 'white')}; 
  margin: 0 7px;
  font-size: 16px;
  cursor: pointer;
  transition: border 0.2s ease, color 0.2s ease;
  text-align: center; 

  &:active {
    border: 1px solid #3b46f2;
    color: #3b46f2;
  }
`;

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;    
  width: 100%;            
  margin-bottom: 25px; 
`;

export const Divider = styled.div`
  width: 362px; 
  height: 1px; 
  background-color: #838383; 
`;

export const SelectMonthWrapper = styled.div`
  margin-bottom: 10px;
  text-align: left; 
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MonthButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  flex-wrap: wrap; 
  align-items: flex-start; 
`;

export const MonthButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px; 
  justify-content: flex-start; 
`;

export const SelectMonthText = styled.span`
  display: block;
  margin-left: 7px;
  margin-bottom: 5px;
  font-size: 13px;
  color: #fff;
  text-align: left; 
`;

export const MonthButton = styled.button<{ $active: boolean }>`
  width: 75px;
  height: 95px;
  border-radius: 16px;
  background-color: #313131;
  border: 1px solid ${({ $active }) => ($active ? '#3b46f2' : '#CBCFCF')};
  color: ${({ $active }) => ($active ? '#3b46f2' : 'white')};
  margin: 5px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  transition: color 0.2s ease, border 0.2s ease;

  &:active {
    border: 1px solid #3b46f2;
    color: #3b46f2;
  }
`;

export const MonthText = styled.span<{ $active: boolean }>`
  font-size: 16px; 
  line-height: 20px; 
  padding: 5px;
  text-align: center; 
  display: flex; 
  color: ${({ $active }) => ($active ? '#3b46f2' : 'white')}; 
`;

export const YearText = styled.span<{ $active: boolean }>`
  font-size: 12px;
  line-height: 18px;
  padding: 5px;
  text-align: center; 
  display: flex; 
  color: ${({ $active }) => ($active ? '#3b46f2' : '#CBCFCF')}; 
`;


