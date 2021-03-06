import { getInstance } from "./auth";

export const authGuard = (to: any, from: any, next: any) => {
  const authService = getInstance();
  const fn = () => {
    // If the user is authenticated, continue with the route
    if (authService.isAuthenticated) {
      return next();
    }

    // Otherwise, log in
    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!authService.authLoading) {
    return fn();
  }

  // Watch for the loading property to change before we check isAuthenticated
  authService.$watch("authLoading", (loading: boolean) => {
    if (loading === false) {
      return fn();
    }
  });
};
