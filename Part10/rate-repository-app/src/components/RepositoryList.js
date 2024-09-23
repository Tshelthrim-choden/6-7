import React from 'react';
import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const ItemSeparator = () => <View />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
 

  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
