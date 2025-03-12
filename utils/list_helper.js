const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const total = blogs.reduce((sum,order) => sum + order.likes, 0)
    return total
}

module.exports = {
    dummy,
    totalLikes
}