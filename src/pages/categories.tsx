import React, {useState} from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Paper, Container, Typography, Grid } from "@material-ui/core";
import "../styles/categoryPage.css";

const CategoriesPage = ({data}) =>  {

  const [categoriesState, setCategoriesState] = useState(data.mc3.categories.edges);

  function getModelsCategories(categoriesState: object[]): string[] {
    const modelsList = [];
    const modelsListRaw = [];

    categoriesState.map(({node}) => {
      // if it's the first loop, modelsList is empty
      if (modelsList.length === 0) {
        modelsList.push({ "title": node.model, "value": 1});
        modelsListRaw.push(node.model);
      }
      // else if modelsList contains a model, we check if the model has been already added to the raw list
      else {
        // if yes, we increase the value
        if(modelsListRaw.includes(node.model)) {
          modelsList.map(model => {
            if (node.model === model.title) {
              model.value += 1;
            }
          })
        }
        // if not, we set the models list and update the raw list
        else {
          modelsList.push({ "title": node.model, "value": 1});
          modelsListRaw.push(node.model);
        }
      }
    });

    return modelsList;
  }

  function getOrderedCategories() {
    // group all categories by models
    const modelsList = getModelsCategories(categoriesState);
    const orderedCategories = [];
    console.log(modelsList);

    modelsList.map(model => {
      categoriesState.map(({node}) => {
          if (node.model === model.title) {
            orderedCategories.push(node);
          }
      })
    })

    return orderedCategories;
  }


  function displayCategory(category) {
    return (
          <div key = {category.uuid}>
            <h3 className='category-title'>{category.title} [{category.model}]</h3>

            <Paper elevation={0}>
              <section className='category-section'>
                <h4 className='property-title'>Description</h4>
                <p>{category.description}</p>
              </section>
            </Paper>

            <Paper elevation={0}>
              <section className='category-section'>
                <h4 className='property-title'>Attributes ({category.attributesCount})</h4>
                <ul>
                  {category.attributes.map(attribute => (
                    <li>{attribute.title}</li>
                  ))}
                </ul>
              </section>
            </Paper>
          </div>
    )
  }

  function getCategoriesByModel(model:string, categoriesList:object[]):object[] {
    const modelCategoriesList = [];
    categoriesList.map(category => {
      if (category.model === model) {
        modelCategoriesList.push(category);
      }
    });

    return modelCategoriesList;
  }

  function displayCategories() {
    const response = [];
    const orderCategories = getOrderedCategories();

    // todo refacto
    const filmsCategoriesList = getCategoriesByModel('film', orderCategories);
    const numbersCategoriesList = getCategoriesByModel('number', orderCategories);
    const songsCategoriesList = getCategoriesByModel('song', orderCategories);

    response.push(<h2>Film</h2>)
    filmsCategoriesList.map( category => {
      response.push(displayCategory(category));
    })

    response.push(<h2>Number</h2>)
    numbersCategoriesList.map( category => {
      response.push(displayCategory(category));
    })

    response.push(<h2>Song</h2>)
    songsCategoriesList.map( category => {
      response.push(displayCategory(category));
    })

    return response;
  }

  return (
        <Layout>
            <Container className='container' maxWidth="sm">
              <div>Debug mode</div>
              {displayCategories()}
            </Container>
        </Layout>
    );
};

export default CategoriesPage;

export const query = graphql`
  {
    mc3 {
      categories {
        edges {
          node {
            model
            title
            uuid
            description
            attributesCount
            attributes
          }
        }
      }
    }
  }
`;