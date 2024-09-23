import React from 'react';
import { View, Image } from 'react-native';
import Text from './Text';
import { repositoryItemStyles as styles } from './styles';

const RepositoryItem = ({ item, showGitHubButton }) => {
  const formatCount = (value) => (value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value));

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>{item.language}</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text fontWeight="bold">{formatCount(item.stargazersCount)}</Text>
            <Text color="textSecondary">Stars</Text>
          </View>
          <View style={styles.stat}>
            <Text fontWeight="bold">{formatCount(item.forksCount)}</Text>
            <Text color="textSecondary">Forks</Text>
          </View>
          <View style={styles.stat}>
            <Text fontWeight="bold">{item.reviewCount}</Text>
            <Text color="textSecondary">Reviews</Text>
          </View>
          <View style={styles.stat}>
            <Text fontWeight="bold">{item.ratingAverage}</Text>
            <Text color="textSecondary">Rating</Text>
          </View>
        </View>
        {showGitHubButton && (
          <Button title="Open in GitHub" onPress={() => Linking.openURL(item.url)} />
        )}
      </View>
    </View>
  );
};

export default RepositoryItem;
