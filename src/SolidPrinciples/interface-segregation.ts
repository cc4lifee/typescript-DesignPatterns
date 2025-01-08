interface Machine { //NOT GOOD
    print(document: Document): void;
    scan(document: Document): void;
    fax(document: Document): void;
}

interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        console.log('The Machine is printing');

    }

}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {

    print(document: Document): void {
        console.log('The Machine is printing');
    }

    scan(document: Document): void {
        console.log('The Machine is scanning');
    }

    fax(document: Document): void {
        console.log('The machine is sending fax');
    }
}

// =====================================================================================


/**
 * Real World Application of Interface Segregation
 * 
 * 
 * Creating Posts
 * Commenting Posts
 * Sharing Posts
 * Admin - 3 
 * Regular -2 
 * 
 */

interface Post{
    title: string;
    content: string;
}

interface Comment{
    title: string;
    content: string;
}

interface PostCreator{ 
    createPost(post:Post):void;
}

interface CommentCreator{ 
    createComment(comment:Comment):void;
}

interface PostSharer{ 
    sharePost(post:Post):void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
    createPost(post: Post): void {
        console.log('Admin is creating a Post');
    }
    createComment(comment: Comment): void {
        console.log('Admin is creating a Comment');
    }
    sharePost(post: Post): void {
        console.log('Admin is sharing a post');
    }
    
}

class RegularUser implements CommentCreator, PostSharer {
    createComment(comment: Comment): void {
        console.log('Regular User is creating a Comment');
    }
    sharePost(post: Post): void {
        console.log('Regular User is shareing a Post');
    }

}

