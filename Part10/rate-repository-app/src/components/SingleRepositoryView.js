import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { Linking } from 'expo';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem'; 
import { GET_REPOSITORY } from '../graphql/queries'; 
import { format } from 'date-fns';

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading repository</Text>;

  const repository = data.repository;

  const openGitHubRepo = () => {
    Linking.openURL(repository.url);
  };

  return (
    <FlatList
      data={repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id}
      ListHeaderComponent={() => (
        <View>
          <RepositoryItem item={repository} showGitHubButton />
          <Button title="Open in GitHub" onPress={openGitHubRepo} />
        </View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default SingleRepositoryView;
