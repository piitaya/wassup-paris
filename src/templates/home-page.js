import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionIntro from "../components/sections/Intro";
import SectionProducts from "../components/sections/Products";
import SectionSavoirFaire from "../components/sections/SavoirFaire";

export const HomePageTemplate = ({ title, description, intro, products, savoirfaire }) => {
  return (
  <>
    <section>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </section>
    <SectionIntro {...intro} />
    <SectionProducts {...products} />
    <SectionSavoirFaire {...savoirfaire} />
  </>
)};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
        products={frontmatter.products}
        savoirfaire={frontmatter.savoirfaire}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default HomePage;

export const homerPageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        intro {
          image {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        savoirfaire {
          blocks {
            title
            text
            image {
              alt
              src {
                childImageSharp {
                  fluid(maxWidth: 2048) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
