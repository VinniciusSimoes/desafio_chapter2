class Routes {

    as = {
        postUsers: 'POSTUsers',
        getTagUsers: 'GETTagsUsers',
        getFeedUsers: 'GETFeedUsers'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/users').as(this.as.postUsers)
        cy.route('GET', '**/api/tags').as(this.as.getTagUsers)
        cy.route('GET', '**/api/articles/feed?limit=10&offset=0').as(this.as.getFeedUsers)
    }
}

export default new Routes();