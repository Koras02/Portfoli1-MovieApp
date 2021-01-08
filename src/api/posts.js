const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
       id: 1,
       title: '회원',
       body: '리덕스'
    }
]

export const getPosts = async() => {
   await sleep(500);
   return posts;
}

export const getPostById = async ({ id }) => {
    await sleep(500);
    return posts.find(post => post.id === id );
}