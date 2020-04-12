import styled from 'styled-components/native';

export const Wrapper = styled.View`
    padding: 24px;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 16px;
`;

export const Property = styled.Text`
    font-size: 14px;
    color: #41414d;

    font-weight: bold;
`;

export const PropertyValue = styled.Text`
    margin-top: 8px;
    font-size: 15px;
    margin-bottom: 24px;
    color: #737380;
`;

export const DetailsButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DetailsButtonText = styled.Text`
    color: #e02041;
    font-size: 15px;
    font-weight: bold;
`;
