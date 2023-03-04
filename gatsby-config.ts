import type { GatsbyConfig } from "gatsby"
import path from "path";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `My Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: path.resolve("data", "content")
            }
        },
        "gatsby-transformer-json"
    ],
}

export default config
