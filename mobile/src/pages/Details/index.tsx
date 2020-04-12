import React from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Incident } from '../../types';
import { Linking } from 'expo';
import * as MailComposer from 'expo-mail-composer';
import IncidentComponent from '../../components/Incident';
import { Feather as Icon } from '@expo/vector-icons';
import {
    Wrapper,
    Header,
    Logo,
    BackButton,
    Contact,
    ContactDescription,
    ContactTitle,
    ContactActions,
    ContactButton,
    ContactButtonText
} from './styles';

const Details: React.FC = () => {
    const navigator = useNavigation();
    const route = useRoute();

    const incident = route.params.incident as Incident;

    const message = `Olá, Estou entrando em contato para saber mais detalhes sobre o caso postado no Be The Hero`;

    const sendMail = () => {
        return MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident!.email],
            body: message
        });
    };

    const sendWhatsApp = () => {
        return Linking.openURL(
            `http://api.whatsapp.com/send?phone=${
                incident!.whatsapp
            }&text=${message}`
        );
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#737380" />
            <Wrapper>
                <Header>
                    <Logo source={require('../../assets/logo.png')} />

                    <BackButton onPress={event => navigator.goBack()}>
                        <Icon name="arrow-left" size={28} color="#e02041" />
                    </BackButton>
                </Header>

                <IncidentComponent
                    showsDetailsButton={false}
                    incident={incident}
                />

                <Contact>
                    <ContactTitle>Salve o dia</ContactTitle>
                    <ContactTitle>Seja o herói desse caso!</ContactTitle>

                    <ContactDescription>Entre em contato:</ContactDescription>

                    <ContactActions>
                        <ContactButton onPress={sendWhatsApp}>
                            <ContactButtonText>WhatsApp</ContactButtonText>
                        </ContactButton>
                        <ContactButton onPress={sendMail}>
                            <ContactButtonText>E-mail</ContactButtonText>
                        </ContactButton>
                    </ContactActions>
                </Contact>
            </Wrapper>
        </>
    );
};

export default Details;
