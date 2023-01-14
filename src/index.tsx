import "./assets/styles/index.css";
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>
)


