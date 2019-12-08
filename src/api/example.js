const getExampleData = ({ isSSR }) => {
  return new Promise((resolve, reject) => {
    const errorData = {
      meta: {
        status: 'error'
      },
      data: {}
    };

    const successData = {
      meta: {
        status: 'success'
      },
      data: {
        title: 'example title',
        description:
          'example description for dealing with examples which is probably better than Lorem Ipsum',
        imageUrl:
          'https://www.shivasubba.com/wp-content/uploads/2017/08/seo-myth.jpg',
        keywords: ''
      }
    };
    resolve(successData);
    // resolve(errorData);
  });
};

export { getExampleData };
