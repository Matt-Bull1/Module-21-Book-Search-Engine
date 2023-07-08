import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $username: String!
  ) {
    addUser(
      email: $email
      password: $password
      username: $username
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($savedBook: bookData!) {
    saveBook(bookData: $bookData) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        title
        }
      }
    }
  `;

  export const REMOVE_BOOK = gql`
  mutation removeBook($savedBook: bookData!) {
    removeBook(bookData: $bookData) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        title
      }
    }
  }
`;