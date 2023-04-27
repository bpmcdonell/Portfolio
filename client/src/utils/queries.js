import { gql } from '@apollo/client';

export const SUBMIT_FORM = gql`
    query FormRes($name: String!, $email: String!, $message: String!) {
        formRes(name: $name, email: $email, message: $message) {
            _id
            name
            email
            message
        }
    }
`;
