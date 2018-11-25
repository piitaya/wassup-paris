const _ = require("lodash");

const {
  createFilePath,
  createRemoteFileNode
} = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const axios = require("axios");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: ".env"
});

const SHOP_ID = process.env.SHOP_ID;
const SHOP_API_KEY = process.env.SHOP_API_KEY;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });
  });
};

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  store,
  cache
}) => {
  const { createNode, createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }

  if (node.internal.type === `EtsyListing`) {
    const fileNode = await createRemoteFileNode({
      url: node.MainImage.url_fullxfull,
      cache,
      store,
      createNode,
      createNodeId
    });
    node.localImage___NODE = fileNode.id;
  }
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions;

  const fetchListings = () =>
    axios.get(`https://openapi.etsy.com/v2/shops/${SHOP_ID}/listings/active`, {
      params: {
        limit: 1000,
        api_key: SHOP_API_KEY,
        includes: "MainImage"
      }
    });
  // await for results
  const res = await fetchListings();

  // // map into these results and create nodes
  for (listing of res.data.results) {
    const nodeContent = JSON.stringify(listing);

    const nodeMeta = {
      id: createNodeId(`etsy-listing-${listing.listing_id}`),
      parent: null,
      children: [],
      internal: {
        type: `EtsyListing`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(listing)
      }
    };
    const node = {
      ...listing,
      ...nodeMeta
    };

    createNode(node);
  }
};
