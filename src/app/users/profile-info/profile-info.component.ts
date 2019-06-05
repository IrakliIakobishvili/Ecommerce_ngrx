import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FileUploadService} from '../../shared-services/file-upload-service';

@Component({
  selector: 'drop-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  public profileInfoForm: FormGroup;
  public profilePicture: string;

  constructor(public fb: FormBuilder, public fileUploadService: FileUploadService) {
    this.profileInfoForm = this.fb.group({
      profilePic: new FormControl(null, [this.fileUploadService.requiredFileType('png')]),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      country: new FormControl(null),
      email: new FormControl(null),
      skype: new FormControl(null),
      phone: new FormControl(null)
    });
  }

  saveChanges(): void {
    const formData = this.fileUploadService.toFormData(this.profileInfoForm.value);
    console.log(formData);
  }

  onProfilePicChange(event): void {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (evt) => {
        // @ts-ignore
        this.profilePicture = evt.target.result;
      };
      fileReader.readAsDataURL(file);
      this.profileInfoForm.patchValue({
        profilePic: file
      });
    }
  }


  countries = [
    {id: 1, name: 'Albania'},
    {id: 2, name: 'Algeria'},
    {id: 3, name: 'American Samoa'},
    {id: 4, name: 'Andorra'},
    {id: 5, name: 'Angola'},
    {id: 6, name: 'Anguilla'},
    {id: 7, name: 'Antarctica'},
    {id: 8, name: 'Antigua and Barbuda'},
    {id: 9, name: 'Argentina'},
    {id: 10, name: 'Armenia'},
    {id: 11, name: 'Aruba'},
    {id: 12, name: 'Kaunas'},
    {id: 13, name: 'Pavilnys'},
    {id: 14, name: 'Pabradė'},
    {id: 15, name: 'Klaipėda'},
    {id: 16, name: 'Vilnius'},
    {id: 17, name: 'Kaunas'},
    {id: 18, name: 'Pavilnys'},
    {id: 19, name: 'Pabradė'},
    {id: 20, name: 'Klaipėda'},
    {id: 21, name: 'Vilnius'},
    {id: 22, name: 'Kaunas'},
    {id: 23, name: 'Pavilnys'},
    {id: 24, name: 'Pabradė'},
    {id: 25, name: 'Klaipėda'},
    {id: 26, name: 'Vilnius'},
    {id: 27, name: 'Kaunas'},
    {id: 28, name: 'Pavilnys'},
    {id: 29, name: 'Pabradė'},
    {id: 30, name: 'Georgia'}
  ];
  selectedCity: any = "United States"
  // selectedCityIds: string[];
  // selectedCityName = 'Vilnius';
  // selectedCityId: number;
  ngOnInit() {
  }

}
