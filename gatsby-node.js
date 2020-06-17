const axios = require('axios');

const get = () => axios.get(`http://127.0.0.1:8000/`);

const getHomepageData = async () => {
      const { data: homepage } = await get();
      return { ...homepage };
};

exports.createPages = async ({ actions: { createPage } }) => {
  const homepage = await getHomepageData();

  createPage({
    path: `/`,
    component: require.resolve('./src/templates/homepage.js'),
    context: { homepage }
  });
};