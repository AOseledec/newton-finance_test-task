class Service {
  _BASE_URL = 'https://jsonplaceholder.typicode.com/';

  getData = async (url: string) => {
    const response = await fetch(this._BASE_URL + url);
    return await response.json();
  };

  getPosts = () => {
    return this.getData('posts');
  };

  getComment = (id: number) => {
    return this.getData(`comments/?postId=${id}`)
  };
};

const service = new Service();
export default service;