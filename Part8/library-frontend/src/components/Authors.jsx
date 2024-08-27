import { useQuery, useMutation, gql } from '@apollo/client';
import Select from 'react-select';
import { useState } from 'react';

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
    }
  }
`;

const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`;

const Authors = () => {
  const { loading, error, data } = useQuery(ALL_AUTHORS);
  const [editAuthor] = useMutation(EDIT_AUTHOR,{refetchQueries: [{ query: ALL_AUTHORS }]});
  
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [birthYear, setBirthYear] = useState('');

  const handleChange = (selectedOption) => {
    setSelectedAuthor(selectedOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAuthor) {
      editAuthor({
        variables: {
          name: selectedAuthor.value,
          setBornTo: parseInt(birthYear),
        },
      });
      setBirthYear('');
      setSelectedAuthor('');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const authorOptions = data.allAuthors.map(author => ({
    value: author.name,
    label: author.name,
  }));

  return (
    <div>
      <h2>Authors</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Born</th>
          </tr>
          {data.allAuthors.map(author => (
            <tr key={author.name}>
              <td>{author.name}</td>
              <td>{author.born}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Update Author Birth Year</h3>
      <form onSubmit={handleSubmit}>
        <Select
          value={selectedAuthor}
          onChange={handleChange}
          options={authorOptions}
          placeholder="Select author..."
        />
        <input
          type="number"
          value={birthYear}
          onChange={({ target }) => setBirthYear(target.value)}
          placeholder="New birth year"
        />
        <button type="submit">Update Birth Year</button>
      </form>
    </div>
  );
};

export default Authors;
