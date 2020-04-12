import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding: 0px 24px;
    padding-top: 40px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const Logo = styled.Image``;

export const BackButton = styled.TouchableOpacity``;

export const Contact = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 16px;
`;

export const ContactTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    color: #13131a;
    line-height: 30px;
`;

export const ContactDescription = styled.Text`
    font-size: 15px;
    color: #737380;
    margin-top: 16px;
`;

export const ContactActions = styled.View`
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContactButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    background-color: #e02041;
    border-radius: 8px;
    height: 50px;
    width: 48%;
    justify-content: center;
    align-items: center;
`;

export const ContactButtonText = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;
