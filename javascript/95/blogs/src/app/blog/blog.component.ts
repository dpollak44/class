import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { Post } from '../shared/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  /*static*/ readonly NUM_POSTS: number = 3;
  index = 0;
  private posts: Post[];
  postsToShow: Post[];

  //posts: Observable<Post[]>;
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    // since component not reused we can use snapshot not rxjs observable
    const blogId = this.route.snapshot.paramMap.get('blogId');
    // this.posts = this.blogService.getPosts(blogId);
    this.blogService.getPosts(blogId).subscribe(posts => {
      this.posts = posts;
      this.updatePosts();
    });
  }

  /*
  getPosts(): Post[] {
    return this.posts ? this.posts.slice(this.index, this.index + this.NUM_POSTS) : [];
  }
  */
  updatePosts(): void {
    this.postsToShow = this.posts ? this.posts.slice(this.index, this.index + this.NUM_POSTS) : [];
  }

  getNumPosts(): number {
    return this.posts ? this.posts.length : 0;
  }

  prev(): void {
    this.index -= this.NUM_POSTS;
    this.updatePosts();
  }

  next(): void {
    this.index += this.NUM_POSTS;
    this.updatePosts();
  }
}
