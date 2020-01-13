import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Post[];
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    // since component not reused we can use snapshot not rxjs observable
    const blogId = this.route.snapshot.paramMap.get('blogId');
    this.blogService.getPosts(blogId).subscribe(posts => {
      this.posts = posts;
    });
  }

}
