import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Incident as IIncident } from '../../types';
import { Feather as Icon } from '@expo/vector-icons';
import {
    Wrapper,
    Property,
    PropertyValue,
    DetailsButton,
    DetailsButtonText
} from './styles';

interface Props {
    incident: IIncident;
    showsDetailsButton?: boolean;
}

const Incident: React.FC<Props> = ({ incident, showsDetailsButton = true }) => {
    const navigator = useNavigation();

    const goToPage = (pagePath: string, incident: IIncident) =>
        navigator.navigate(pagePath, { incident });

    return (
        <Wrapper>
            <Property>ONG: </Property>
            <PropertyValue>{incident.title} </PropertyValue>

            <Property>CASO: </Property>
            <PropertyValue>{incident.description}</PropertyValue>

            <Property>Valor: </Property>
            <PropertyValue>R$ {incident.value.toFixed(2)}</PropertyValue>

            {showsDetailsButton && (
                <DetailsButton
                    onPress={event => goToPage('stack_details', incident)}
                >
                    <DetailsButtonText>Ver mais detalhes</DetailsButtonText>

                    <Icon name="arrow-right" size={16} color="#e02041" />
                </DetailsButton>
            )}
        </Wrapper>
    );
};

export default Incident;
