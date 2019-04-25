import { Component, Input } from '@angular/core';
import { MarsRoverApiPhotos } from '../mars-rover-api-photos.service';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers: [ MarsRoverApiPhotos ]
})
export class PhotoListComponent {
  @Input() childPhotos;

  constructor(private photoService: PhotoService) { }
  saveImage(imgURL: string, camera: string, date: string) {
    let newPhoto: Photo = new Photo(imgURL, camera, date);
    this.photoService.addPhoto(newPhoto);
    alert('This image has been added to your list of saved images.');
  }

}
