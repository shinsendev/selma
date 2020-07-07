const axios = require('axios');

const getHomeAPI = () => axios.get(process.env.MC3_HOME);

const getHomepageData = async () => {
      const { data: homepage } = await getHomeAPI();
      return { ...homepage };
      // return await get();
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const homepage = await getHomepageData();

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/homepage.tsx'),
    context: { homepage }
  });

  // const filmsCount = homepage.filmsCount;
  // const numbersCount = homepage.numbersCount;
  // const songsCount = homepage.songsCount;
  // const attributesCount = homepage.attributesCount;
  const peopleCount = homepage.personsCount;

  // // for debug
  const filmsCount = 5;
  const numbersCount = 5;
  const songsCount = 5;
  const attributesCount = 5;
  // const peopleCount = 5;

  // manage films
  const filmsGraphQL = await graphql(`
    query {
      mc3 {
        films(first:`+filmsCount+`) {
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

  filmsGraphQL.data.mc3.films.edges.forEach(({ node }, index) => {
      createPage({
        path: '/film/' + node.uuid,
        component: require.resolve(`./src/templates/film.tsx`),
        context: {
          film: node
        },
      })
    });

  // manage numbers
  const numbersGraphQL = await graphql(`
    query {
      mc3 {
        numbers(first:`+numbersCount+`) {
          edges {
            node {
              id
              uuid
              title
              film
              startingTc
              endingTc
              beginning
              ending
              completeness
              completenessOption
              structure
              shots
              averageShotLength
              performance
              performers
              cast
              noParticipationStars
              spectators
              diegeticPerformance
              visibleMusicians
              topic
              diegeticPlace
              imaginaryPlace
              ethnicStereotypes
              exoticism
              songs
              musicalEnsemble
              dubbing
              tempo
              musicalStyles
              arrangers
              danceDirector
              danceEnsemble
              dancingType
              danceSubgenre
              danceContent
              source
              quotation
            }
          }
        }
      }
    }`
  );

  numbersGraphQL.data.mc3.numbers.edges.forEach(({ node }, index) => {
    createPage({
      path: '/number/' + node.uuid,
      component: require.resolve(`./src/templates/number.tsx`),
      context: {
        number: node
      },
    })
  });

  // manage songs
  const songsGraphQL = await graphql(`
    query {
      mc3 {
        songs(first:`+songsCount+`) {
          edges {
            node {
              uuid
              title
              year
              numbers
              films
              songTypes
              composers
              lyricists
            }
          }
        }
      }
    }`
  );

  songsGraphQL.data.mc3.songs.edges.forEach(({ node }) => {
    createPage({
      path: '/song/' + node.uuid,
      component: require.resolve(`./src/templates/song.tsx`),
      context: {
        song: node
      },
    })
  });

  // manage attributes
  const attributesGraphQL = await graphql(`
    query {
      mc3 {
        attributes(first:`+attributesCount+`) {
          edges {
            node {
              uuid
              title
              categoryTitle
              categoryUuid
              description
              example
              elements
              model
            }
          }
        }
      }
    }`
  );

  attributesGraphQL.data.mc3.attributes.edges.forEach(({ node }) => {
    createPage({
      path: '/attribute/' + node.uuid,
      component: require.resolve(`./src/templates/attribute.tsx`),
      context: {
        attribute: node
      },
    })
  });

  // manage persons
  const peopleGraphQL = await graphql(`
    query {
      mc3 {
        people(first:`+peopleCount+`) {
          edges {
            node {
              uuid
              fullname
              gender
              type
              viaf
              relatedFilms
              relatedNumbers
              choregraphers
              composers
              lyricists
              averageShotLength
              presenceInFilms
            }
          }
        }
      }
    }`
  );


  peopleGraphQL.data.mc3.people.edges.forEach(({ node }) => {
    createPage({
      path: '/person/' + node.uuid,
      component: require.resolve(`./src/templates/person.tsx`),
      context: {
        person: node
      },
    })
  });

};