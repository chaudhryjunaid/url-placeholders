const expect = require('chai').expect;
const urlPlaceholders = require('../index');

describe('url-placeholders', function() {
  it('should correctly replace url parameters when given to interpolate', function() {
    const replaceUrl = urlPlaceholders();
    const result = replaceUrl('/users/:user_id/books/:book_id', {
      user_id: 1,
      book_id: 2
    });
    expect(result).to.eql('/users/1/books/2');
  });
  it('should correctly replace url parameters when given as defaults', function() {
    const replaceUrl = urlPlaceholders({
      defaults:{
        user_id: 1,
        book_id: 2
      }
    });
    const result = replaceUrl('/users/:user_id/books/:book_id', );
    expect(result).to.eql('/users/1/books/2');
  });
  it('should correctly replace url parameters when given as a mix of defaults and interpolate args', function() {
    const replaceUrl = urlPlaceholders({
      defaults:{
        user_id: 1
      }
    });
    const result = replaceUrl('/users/:user_id/books/:book_id', {
      book_id: 2
    });
    expect(result).to.eql('/users/1/books/2');
  });
  it('should return interpolate with bound url if no default args or interpolate args', function() {
    const replaceUrl = urlPlaceholders();
    const interpolate = replaceUrl('/users/:user_id/books/:book_id');
    const result = interpolate({
      user_id: 1,
      book_id: 2
    });
    expect(result).to.eql('/users/1/books/2');
  })
});