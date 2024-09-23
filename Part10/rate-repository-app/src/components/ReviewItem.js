import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';

const ReviewItem = ({ review }) => {
  const createdAtFormatted = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <Text style={styles.username}>{review.user.username}</Text>
      <Text style={styles.date}>{createdAtFormatted}</Text>
      <Text style={styles.reviewText}>{review.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  ratingContainer: {
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginBottom: 5,
  },
  ratingText: {
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
  },
  date: {
    color: 'gray',
  },
  reviewText: {
    marginTop: 5,
  },
});

export default ReviewItem;
