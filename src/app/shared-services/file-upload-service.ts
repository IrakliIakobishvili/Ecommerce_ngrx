import {FormControl} from '@angular/forms';

export class FileUploadService {

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for(const key of Object.keys(formValue)){
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }

  requiredFileType(type: string) {
    return (control: FormControl) => {
      const file = control.value;
      if (file) {
        const extention = file.name.split('.')[1].toLowerCase();
        if (type.toLowerCase() !== extention.toLowerCase()) {
          return {
            requiredFileType: true
          };
        }
      }
      return null;
    }
    return null;
  }

}
