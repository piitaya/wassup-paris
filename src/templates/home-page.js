import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SectionIntro from "../components/sections/Intro";
import SectionProducts from "../components/sections/Products";
import SectionSavoirFaire from "../components/sections/SavoirFaire";
import SectionViewMore from "../components/sections/ViewMore";

export const HomePageTemplate = ({
  intro,
  products,
  viewmore,
  savoirfaire
}) => {
  return (
    <>
      <SectionIntro {...intro} />
      <SectionProducts {...products} />
      <SectionViewMore {...viewmore} />
      <SectionSavoirFaire {...savoirfaire} />
    </>
  );
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <HomePageTemplate
        intro={frontmatter.intro}
        products={frontmatter.products}
        viewmore={frontmatter.viewmore}
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
        viewmore {
          text,
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
