import React from 'react'

const {
  Provider: BookstoreServiceProveider,
  Consumer: BookstoreServiceConsumer
} = React.createContext();

export {
  BookstoreServiceProveider,
  BookstoreServiceConsumer
}