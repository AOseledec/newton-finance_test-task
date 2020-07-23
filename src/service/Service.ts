class Service {
  _BASE_URL = 'https://jsonplaceholder.typicode.com/';

  getData = async (url: string) => {
    const response = await fetch(this._BASE_URL + url);
    return await response;
  };

  getPosts = (page: number, limit: number) => {
    return this.getData(`posts?_page=${page}&_limit=${limit}`);
  };

  getComment = (id: number) => {
    return this.getData(`comments/?postId=${id}`).then(data => data.json())
  };
};

const service = new Service();
export default service;