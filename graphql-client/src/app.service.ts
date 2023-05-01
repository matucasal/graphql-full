import { Injectable } from '@nestjs/common';
import { request, gql } from 'graphql-request';

// Replace this URL with the URL of your GraphQL API
const GRAPHQL_API_URL = 'http://localhost:3000/graphql';

@Injectable()
export class AppService {
  async getData() {
    // Replace this query with the actual query for your GraphQL API
    const query = gql`
      {
        products {
          description
        }
        orders {
          subtotal
          items {
            quantity
            product {
              id
              price
              reviews {
                comment
                rating
              }
            }
          }
        }
      }
    `;

    try {
      console.log('tryin');
      const data = await request(GRAPHQL_API_URL, query);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching data from GraphQL API');
    }
  }
}
