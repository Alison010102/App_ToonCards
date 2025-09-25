import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const cards = [
    { id: '1', title: 'Card 1', description: 'This is the first card.' },
    { id: '2', title: 'Card 2', description: 'This is the second card.' },
    { id: '3', title: 'Card 3', description: 'This is the third card.' },
];

const Card = ({ title, description }) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
    </View>
);

const CardScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Toon Cards</Text>
            <FlatList
                data={cards}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card title={item.title} description={item.description} />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    list: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 16,
        color: '#555',
    },
});

export default CardScreen;