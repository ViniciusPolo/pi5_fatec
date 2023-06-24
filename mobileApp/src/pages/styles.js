import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const Restaurant = styled.View`
    align-items: center;
    //margin: 0 20 30px;
`;

export const Logo = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background: #fff;
`;

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
 `;

 export const Bio = styled.Text.attrs({
    numberOfLines: 2,
 })`
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
 `;
 
 export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: #3498db;
    justify-content: center;
    align-items: center;
    height:36px;
 `;
 
 export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
 `;

 export const Buttons = styled.View`
 
 `;