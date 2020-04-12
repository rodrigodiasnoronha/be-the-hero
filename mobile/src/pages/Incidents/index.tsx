import React, { useEffect, useState } from 'react';
import { FlatList, ToastAndroid, StatusBar } from 'react-native';
import { Incident } from '../../types';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import IncidentComponent from '../../components/Incident';
import {
    Wrapper,
    Header,
    Logo,
    Title,
    TitleBold,
    ContentDescription,
    ContentTitle
} from './styles';

const Incidents: React.FC = () => {
    const [incidents, setIncidents] = useState<Incident[] | []>([]);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const navigation = useNavigation();

    useEffect(() => {
        getIncidents();
    }, []);

    const getIncidents = async () => {
        if (loading) {
            return 0;
        }

        if (total && incidents.length === total) {
            return 0;
        }

        setLoading(true);

        try {
            const response = await api.get(
                `/incidents?page=${page}&limit=${2}`
            );

            const newIncidents = response.data.data as Incident[];

            setTotal(response.data.count || 0);
            setPage(page + 1);
            setIncidents([...incidents, ...newIncidents]);
            setLoading(false);
        } catch (error) {
            return ToastAndroid.show(
                'Ocorreu um erro ao mostrar os incidentes',
                ToastAndroid.BOTTOM
            );
        }
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#737380" />
            <Wrapper>
                <Header>
                    <Logo source={require('../../assets/logo.png')} />

                    <Title>
                        Total de
                        <TitleBold> {incidents?.length || 0} casos</TitleBold>.
                    </Title>
                </Header>

                <ContentTitle>Bem vindo!</ContentTitle>
                <ContentDescription>
                    Escolha um dos casos abaixo e salve o dia!
                </ContentDescription>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    onEndReached={getIncidents}
                    onEndReachedThreshold={0.1}
                    style={{ flex: 1, marginTop: 32 }}
                    data={incidents}
                    keyExtractor={item => String(item.id)}
                    renderItem={data => (
                        <IncidentComponent
                            key={data.item.id}
                            incident={data.item}
                        />
                    )}
                />
            </Wrapper>
        </>
    );
};

export default Incidents;
