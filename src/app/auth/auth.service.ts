import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { environment } from "src/environments/environment";
import { AuthData, AuthUpdateData, AuthResetData } from "./auth-data.model";
import { AlertService } from "../components/alert/alert.service";

const ROOT_URL = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private userId: string;
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuth = false;
  private tokenTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {}

  //FUNCTIONS----------------------------------------------------------

  signup(
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
  ) {
    const authData: AuthData = { name, email, password, passwordConfirm };

    this.http.post(`${ROOT_URL}/signup`, authData).subscribe(
      () => {
        this.alertService.success("Welcome, you signed up successfully.", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.login(email, password);
      },
      err => {
        this.alertService.error(
          "Unable to sign you up, please try again.",
          {
            autoClose: true,
            keepAfterRouteChange: true
          }
        );
        this.authStatusListener.next(false);
      }
    );
  }

  autoLogin() {
    //STOP IF NO AUTH DATA
    const authData = this.getAuthData();
    if (!authData) {
      return;
    }

    const now = new Date();
    const expiresIn = authData.expirationDate.getTime() - now.getTime();

    //VERIFY NOT EXPIRED & LOGIN
    if (expiresIn > 0) {
      this.token = authData.token;
      this.userId = authData.userId;
      this.isAuth = true;
      this.setAuthTimer(expiresIn / 1000);
      this.alertService.info("You've been logged in automatically.", {
        autoClose: true,
        keepAfterRouteChange: true
      });
      this.authStatusListener.next(true);
    }
  }

  login(email: string, password: string) {
    const authData: AuthData = { email, password };

    this.http
      .post<{ token: string; user: any; expiresIn: number }>(
        `${ROOT_URL}/login`,
        authData
      )
      .subscribe(
        res => {
          //FETCH TOKEN FROM RESPONSE & SET
          const token = res.token;
          this.token = token;

          //RELATE TOKEN EXPIRATION FROM BACKEND TO UI
          if (token) {
            const expiresInDuration = res.expiresIn;
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );

            //START TIMER & SAVE AUTH
            this.setAuthTimer(expiresInDuration);
            this.userId = res.user._id;
            this.saveAuthData(token, this.userId, expirationDate);

            //EXPOSE USER IS LOGGED
            this.isAuth = true;
            this.alertService.success("You logged in successfully.", {
              autoClose: true,
              keepAfterRouteChange: true
            });
            //DISPLAY IN UI USER IS LOGGED
            this.authStatusListener.next(true);

            this.router.navigate(["/"]);
          }
        },

        err => {
          this.authStatusListener.next(false);
          this.alertService.error(
            "Your email or password is incorrect, please try again.",
            {
              autoClose: true,
              keepAfterRouteChange: true
            }
          );
        }
      );
  }

  logout() {
    //RESET ALL
    this.token = null;
    this.userId = null;
    this.isAuth = false;
    this.alertService.warn("You logged out successfully.", {
      autoClose: true,
      keepAfterRouteChange: true
    });
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();

    this.router.navigate(["/"]);
  }

  changePassword(
    passwordCurrent: string,
    password: string,
    passwordConfirm: string
  ) {
    const authUpdateData: AuthUpdateData = {
      passwordCurrent,
      password,
      passwordConfirm
    };

    this.http
      .patch<{ token: string; user: any; expiresIn: number }>(
        `${ROOT_URL}/updateMyPassword`,
        authUpdateData
      )
      .subscribe(
        res => {
          //FETCH TOKEN FROM RESPONSE & SET
          const token = res.token;
          this.token = token;

          //RELATE TOKEN EXPIRATION FROM BACKEND TO UI
          if (token) {
            const expiresInDuration = res.expiresIn;
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );

            //START TIMER & SAVE AUTH
            this.setAuthTimer(expiresInDuration);
            this.userId = res.user._id;
            this.saveAuthData(token, this.userId, expirationDate);

            //EXPOSE USER IS LOGGED
            this.isAuth = true;
            this.alertService.success(
              "You successfully changed your password. Your page will reload in 8 seconds.",
              {
                autoClose: true,
                keepAfterRouteChange: true
              }
            );
            //DISPLAY IN UI USER IS LOGGED
            this.authStatusListener.next(true);

            //DELAY RELOAD FOR ALERT
            setTimeout(() => {
              location.reload();
            }, 8000);
          }
        },

        err => {
          this.alertService.error("Your passwords don't match.", {
            autoClose: true,
            keepAfterRouteChange: true
          });
          this.authStatusListener.next(false);
        }
      );
  }

  forgotPassword(email: string) {
    this.http.post(`${ROOT_URL}/forgotPassword`, { email }).subscribe(
      () => {
        this.alertService.success("Your email has been sent.", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.router.navigate(["/auth/forgot/sent"]);
      },
      err => {
        this.alertService.error("That email does not exist in our server.", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.authStatusListener.next(false);
      }
    );
  }

  resetPassword(token: string, password: string, passwordConfirm: string) {
    const authResetData: AuthResetData = {
      password,
      passwordConfirm
    };

    this.http
      .patch<{ token: string; user: any; expiresIn: number }>(
        `${ROOT_URL}/resetPassword/${token}`,
        authResetData
      )
      .subscribe(
        res => {
          //FETCH TOKEN FROM RESPONSE & SET
          const token = res.token;
          this.token = token;

          //RELATE TOKEN EXPIRATION FROM BACKEND TO UI
          if (token) {
            const expiresInDuration = res.expiresIn;
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );

            //START TIMER & SAVE AUTH
            this.setAuthTimer(expiresInDuration);
            this.userId = res.user._id;
            this.saveAuthData(token, this.userId, expirationDate);

            //EXPOSE USER IS LOGGED
            this.isAuth = true;
            this.alertService.success("You successfully reset your password.", {
              autoClose: true,
              keepAfterRouteChange: true
            });
            //DISPLAY IN UI USER IS LOGGED
            this.authStatusListener.next(true);

            this.router.navigate(["/"]);
          }
        },
        err => {
          this.alertService.error("Your passwords don't match.", {
            autoClose: true,
            keepAfterRouteChange: true
          });
          this.authStatusListener.next(false);
        }
      );
  }

  //TOOLS----------------------------------------------------------

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expirationDate = localStorage.getItem("expiration");

    if (!token || !expirationDate || !userId) {
      return;
    }

    return {
      token,
      userId,
      expirationDate: new Date(expirationDate)
    };
  }

  private saveAuthData(token: string, userId: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiration");
  }

  //GETTERS----------------------------------------------------------

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuth;
  }
}
