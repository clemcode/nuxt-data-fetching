const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default defineEventHandler(async (event) => {
  await sleep(2000)
  return [
      {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 100,
      "user": {
      "id": 63,
      "username": "eburras1q"
      }
      },
      {
      "id": 2,
      "body": "What terrific math skills you’re showing!",
      "postId": 27,
      "user": {
      "id": 71,
      "username": "omarsland1y"
      }
      },
      {
      "id": 3,
      "body": "You are an amazing writer!",
      "postId": 61,
      "user": {
      "id": 29,
      "username": "jissetts"
      }
      },
      {
      "id": 4,
      "body": "Wow! You have improved so much!",
      "postId": 8,
      "user": {
      "id": 19,
      "username": "bleveragei"
      }
      },
      {
      "id": 5,
      "body": "Nice idea!",
      "postId": 62,
      "user": {
      "id": 70,
      "username": "cmasurel1x"
      }
      }
    ]
})
