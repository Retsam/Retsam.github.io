module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Flotsam & Retsam",
    },
    plugins: [
        "gatsby-plugin-sharp",
        "gatsby-remark-images",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `posts`,
                path: `${__dirname}/posts`,
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-shiki-twoslash",
                        options: { theme: "vitesse-dark" },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    {
                        resolve: "gatsby-remark-footnotes",
                    },
                ],
            },
        },
    ],
};
