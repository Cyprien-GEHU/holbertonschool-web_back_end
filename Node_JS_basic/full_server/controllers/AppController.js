// this programme do the homepage of this web

export default class ApAppController {
  static getHomepage(request, response) {
    response.status(200);
    response.send('Hello Holberton School!');
  }
}
