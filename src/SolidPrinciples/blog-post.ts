class BlogPost {
    title: string;
    content: string

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    // Methos related to content management

    createPost(){
        //Implementation here
    }

    updatePost(){
        //Implementation here
    }

    deletePost(){
        //Implementation here
    }

   
}

class BlogPostDisplay{

    constructor(public blogPost:BlogPost) {}

     //Methos related to post display
     displayHTML(){
        return `<h1>${this.blogPost.title}</h1> <p>${this.blogPost.content}</p>`
    }
}

class BlogPostJson { 
    constructor(public blogPost:BlogPost) {}

    returnJson(){
        return {
            title: this.blogPost.title,
            content: this.blogPost.content
        }
    }
}