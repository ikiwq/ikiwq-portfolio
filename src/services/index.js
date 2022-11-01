import {gql, useQuery} from '@apollo/client'

export const PROJECT_QUERY = gql`
      query MyQuery {
        projectsConnection {
        edges {
        node {
            githubUrl
            id
            linkUrl
            projectDescription
            publishedAt
            technologies
            title
            postImage {
            url
            }
        }
        }
    }
    }
` 