import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordToken!: string;

  newPassword!: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { token } = params;
      this.resetPasswordToken = token;
    });
  }

  resetPassword() {
    console.log('hehe');
    this.apiService
      .post('reset-password', {
        newPassword: this.newPassword,
        token: this.resetPasswordToken,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
