const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
      }
    ]
    const listWithMoreThanOneBlog = [
        {
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0
        },
    ]

    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      assert.strictEqual(result, 5)
    })
    test('when list is more than one blog, return the sum of likes', () => {
        const result = listHelper.totalLikes(listWithMoreThanOneBlog)
        assert.strictEqual(result, 12)
    })
  })

  describe('favoriteBlog', () => {
    const listOfBlogs = [
      {
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        likes: 0,
      },
      {
        title: "First class tests",
        author: "Robert C. Martin",
        likes: 10
      },
      {
        title: "Type wars",
        author: "Robert C. Martin",
        likes: 2,
      },
      {
        title: "React patterns",
        author: "Michael Chan",
        likes: 7,
      },
    ]

    test('Blog with most likes, favoriteBlog', () => {
      const result = listHelper.favoriteBlog(listOfBlogs)
      const expected = {
        title: "First class tests",
        author: "Robert C. Martin",
        likes: 10
      }
      assert.deepStrictEqual(result, expected)
    })
  })

