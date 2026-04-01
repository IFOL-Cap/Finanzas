import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApRoutes } from '../consts';
import { LoginService } from '../services/login.service';

export const guestGuard: CanActivateFn = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree([ApRoutes.im.value, ApRoutes.im.path.step1.value]);
};
