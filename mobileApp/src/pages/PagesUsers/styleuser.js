import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: left;
 `;

export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 14px;
    line-height: 18px;
    color: #000;
    margin-top: 5px;
    text-align: center;
 `;

export const Form = styled.View`
flex-direction: row;
padding-bottom: 20px;
border-bottom-width: 1px;
border-color: #999;
background-color: rgb(32, 35, 41);
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #eee;
    color: #000;
 `;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #38a69d;
    border-radius:  4px;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => props.loading ? 0.7 : 1};
 `;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const ViewContainer = styled.View`
background-color: rgb(158, 158, 158);
padding: 10px;
flex-direction: row;
margin-bottom: 20px;
`;

export const ViewDetail = styled.View`
padding: 5px;
`;

export const Avatar = styled.Image`
   width: 80px;
   height: 80px;
   /* border-radius: 32px; */
   background: #eee; 
`;