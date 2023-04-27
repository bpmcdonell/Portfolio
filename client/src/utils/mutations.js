import { gql } from '@apollo/client';

export const SUBMIT_FORM = gql`
    mutation postFormRes($name: String!, $email: String!, $message: String!) {
        postFormRes(name: $name, email: $email, message: $message) {
            _id
            name
            email      
            message
        }
    }
`;
