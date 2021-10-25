module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Flotsam & Retsam",
    },
    plugins: [
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
                ],
            },
        },
    ],
};
