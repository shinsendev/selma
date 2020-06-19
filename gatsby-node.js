const axios = require('axios');

const getHomeAPI = () => axios.get(`http://127.0.0.1:8000/`);

const getHomepageData = async () => {
      const { data: homepage } = await getHomeAPI();
      return { ...homepage };
      // return await get();
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const homepage = await getHomepageData();
  // const id = '/api/films/d4d74180-70a2-442c-87c3-9de71266506d';
  let first = 1287;
  let total = 0;
  let cursor = null;

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/homepage.js'),
    context: { homepage }
  });

  function getCursor() {
    if (cursor) {
      return 'after:"'+cursor+'"';
    }

    return '';
  }

  const filmsGraphQL = await graphql(`
    query {
      mc3 {
        films(first:`+first+`) {
        totalCount
        edges {
          node {
            title
            uuid
            sample
            studios
            directors
            imdb
            viaf
            productionYear
            releasedYear
            numbers
            remake
            stageshows
            adaptation
            censorships
            pca
            states
            board
            harrison
            protestant
            legion
            length
            numbersRatio
            numbersLength
            averageNumberLength
            globalAverageNumberLength
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }`
  );

  // console.log(JSON.stringify(result, null, 4));

  // todo= create a loop for all movies

  const totalLoops = Math.ceil(filmsGraphQL.data.mc3.films.totalCount / first);

  for(i = 0; i < totalLoops; i++) {
    filmsGraphQL.data.mc3.films.edges.forEach(({ node }, index) => {
      createPage({
        path: '/film/'+node.uuid,
        component: require.resolve(`./src/templates/film.tsx`),
        context: {
          film: node
        },
      })
    })
    total += first;
    cursor = filmsGraphQL.data.mc3.films.pageInfo.endCursor;
  }
};