const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const total = blogs.reduce((sum,order) => sum + order.likes, 0)
    return total
}

const favoriteBlog = (blogs) => {
    let favoriteBlog = blogs[0]

    for (let i = 1; i < blogs.length; i++){
        if (blogs[i].likes > favoriteBlog.likes){
            favoriteBlog = blogs[i]
        }

    }
    return ({
        title: favoriteBlog.title,
        author: favoriteBlog.author,
        likes: favoriteBlog.likes,
    })
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}