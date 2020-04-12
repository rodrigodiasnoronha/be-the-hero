import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import Contants from 'expo-constants';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding: 0px 24px;
    padding-top: 40px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
    font-size: 15px;
    color: #737380;
`;

export const TitleBold = styled(Title)`
    font-weight: bold;
`;

export const ContentTitle = styled.Text`
    font-size: 30px;
    margin: 48px 0px 16px;
    color: #13131a;
    font-weight: bold;
`;

export const ContentDescription = styled.Text`
    font-size: 16px;
    line-height: 24px;
    color: #737380;
`;
