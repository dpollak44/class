import { Component, Input } from '@angular/core';

import Person from '../shared/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input()
  person: Person;

  addFriend(newFriend: string) {
    this.person.friends = this.person.friends || [];
    this.person.friends.push(newFriend);
  }

  deleteFriend(indexToDelete: number) {
    this.person.friends.splice(indexToDelete, 1);
  }
}
