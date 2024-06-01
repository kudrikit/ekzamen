import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent implements OnInit {
  uploadFileForm: FormGroup;
  selectedFile: File | null = null;
  message: string = '';
  files: any[] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.uploadFileForm = this.formBuilder.group({
      Key: [''],
    });
  }

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles(): void {
    this.userService.getFilesList()
      .subscribe((files: any) => {
        this.files = files;
        console.log("file-uploading files: ", files);
      });
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.userService.uploadFile(formData)
      .subscribe(
        response => {
          console.log('File uploaded successfully:', response);
          this.loadFiles();
        },
        error => {
          console.error('Error uploading file:', error);
        }
      );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files?.[0] || null;
  }

  deleteFile(Key: string): void {
    if (confirm('Вы уверены, что хотите удалить файл?')) {
      this.userService.deleteFile(Key).subscribe(() => {
        this.loadFiles();
      });
    }
  }

  isImage(fileName: string): boolean {
    const ext = fileName.split('.').pop()?.toLowerCase();
    return ext ? ['jpg', 'jpeg', 'png', 'gif'].includes(ext) : false;
  }

  getFileUrl(fileKey: string): string {
    // Используем стандартный формат URL для S3 без указания региона
    const bucketName = 'mean-bucket-for-storage';
    return `https://${bucketName}.s3.amazonaws.com/${fileKey}`;
  }

  logout(): void {
    this.userService.logout();
  }

  isUserAuth(): boolean {
    return this.userService.isUserAuth();
  }

  getCurrentUserId(): string {
    return this.userService.getCurrentUserId();
  }
}
