import { StyleSheet } from 'react-native';
import theme from './theme';

export const repositoryItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: theme.colors.white,
    marginBottom: 10,
    borderRadius: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  languageContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 6,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    marginTop: 5,
  },
  language: {
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  stat: {
    alignItems: 'center',
  },
});

export const appBarStyles = StyleSheet.create({
  container: {
    paddingTop: 40, 
    backgroundColor: theme.colors.appBarBackground,
    padding: theme.spacing.medium,
  },
  tab: {
    color: theme.colors.white,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.small,
  },
});

export const mainStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

export const signInStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start', 
  },
  form: {
    width: '100%', 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
